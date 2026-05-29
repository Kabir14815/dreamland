import { chromium } from 'playwright'
import fs from 'fs'
import https from 'https'
import http from 'http'

const URLS = [
  'https://www.google.com/maps/place/Budhiraja+Property+Consultant+(Regd.)/@30.6947,76.8525,17z/data=!4m6!3m5!1s0x390fb6c8f8e8e8e9:0x1ptwjw3s8!8m2!3d30.6947!4d76.8525!16s%2Fg%2F1ptwjw3s8',
  'https://www.google.com/maps/search/Budhiraja+Property+Consultant+Sector+15+Panchkula',
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://www.google.com/' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', (c) => chunks.push(c))
      res.on('end', () => {
        const buf = Buffer.concat(chunks)
        if (res.statusCode === 200 && buf.length > 8000) {
          fs.writeFileSync(dest, buf)
          resolve({ dest, size: buf.length })
        } else {
          reject(new Error(`HTTP ${res.statusCode}, ${buf.length} bytes`))
        }
      })
    })
    req.on('error', reject)
  })
}

function scoreUrl(url) {
  let score = 0
  if (url.includes('=w') || url.includes('=s')) score += 10
  if (url.includes('w1920') || url.includes('s1920') || url.includes('w1600')) score += 20
  if (url.includes('/p/') || url.includes('/gps-cs-s/')) score += 15
  if (url.includes('=s32') || url.includes('=s40') || url.includes('=s64') || url.includes('=s96')) score -= 50
  if (url.includes('streetviewpixels')) score -= 30
  return score
}

;(async () => {
  fs.mkdirSync('public/images', { recursive: true })
  const imageUrls = new Map()

  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled'],
  })

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    locale: 'en-IN',
    viewport: { width: 1400, height: 900 },
  })

  const page = await context.newPage()

  page.on('response', (response) => {
    const url = response.url()
    if ((url.includes('googleusercontent.com') || url.includes('ggpht.com')) && url.length > 80) {
      const clean = url
        .replace(/=w\d+-h\d+[^&]*/, '=w1920-h1080-k-no')
        .replace(/=s\d+[^&]*/, '=s1920')
      const score = scoreUrl(clean)
      if (score > 0) imageUrls.set(clean, Math.max(score, imageUrls.get(clean) || 0))
    }
  })

  for (const url of URLS) {
    console.log('Trying:', url)
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
      await page.waitForTimeout(4000)

      for (const sel of ['button:has-text("Accept all")', 'button:has-text("Reject all")']) {
        try {
          const btn = page.locator(sel).first()
          if (await btn.isVisible({ timeout: 1500 })) await btn.click()
        } catch {}
      }

      await page.waitForTimeout(2000)

      const selectors = [
        'button[aria-label*="Photo"]',
        'button[aria-label*="photo"]',
        '[role="img"][aria-label*="Photo"]',
        'div[jsaction*="photo"]',
        'button:has-text("Photos")',
      ]

      for (const sel of selectors) {
        try {
          const el = page.locator(sel).first()
          if (await el.count()) {
            await el.click({ timeout: 3000 })
            await page.waitForTimeout(3000)
            console.log('Opened photos via', sel)
            break
          }
        } catch {}
      }

      const fromDom = await page.evaluate(() => {
        const urls = []
        document.querySelectorAll('img').forEach((img) => {
          if (img.src) urls.push(img.src)
          if (img.currentSrc) urls.push(img.currentSrc)
        })
        document.querySelectorAll('[style*="background-image"]').forEach((el) => {
          const m = el.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)
          if (m) urls.push(m[1])
        })
        return urls
      })

      fromDom.forEach((u) => {
        if (u.includes('googleusercontent')) {
          const clean = u.replace(/=w\d+-h\d+[^&]*/, '=w1920-h1080-k-no').replace(/=s\d+[^&]*/, '=s1920')
          imageUrls.set(clean, Math.max(scoreUrl(clean), imageUrls.get(clean) || 0))
        }
      })

      await page.screenshot({ path: 'public/images/debug-screenshot.png', fullPage: false })
    } catch (e) {
      console.log('Error on', url, e.message)
    }
  }

  await browser.close()

  const urls = [...imageUrls.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([u]) => u)

  console.log(`Found ${urls.length} candidate images`)
  urls.slice(0, 5).forEach((u) => console.log(u.slice(0, 120)))

  const saved = []
  for (let i = 0; i < Math.min(urls.length, 8); i++) {
    const dest = `public/images/premium-${i + 1}.jpg`
    try {
      const result = await download(urls[i], dest)
      console.log('Saved:', dest, result.size, 'bytes')
      saved.push(`/images/premium-${i + 1}.jpg`)
    } catch (e) {
      console.log('Skip:', e.message)
    }
  }

  fs.writeFileSync('public/images/manifest.json', JSON.stringify({ urls: urls.slice(0, 12), saved }, null, 2))
  console.log('Done. Saved', saved.length, 'images')
})()
