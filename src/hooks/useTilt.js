import { useRef, useCallback } from 'react'

export function useTilt({ maxTilt = 14, scale = 1.03, glare = true } = {}) {
  const ref = useRef(null)
  const glareRef = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    el.style.transform = `perspective(1200px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg) scale3d(${scale}, ${scale}, ${scale})`

    if (glare && glareRef.current) {
      const px = (x + 0.5) * 100
      const py = (y + 0.5) * 100
      glareRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.22) 0%, transparent 55%)`
      glareRef.current.style.opacity = '1'
    }
  }, [maxTilt, scale, glare])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (el) el.style.transform = ''
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }, [])

  return { ref, glareRef, onMove, onLeave }
}
