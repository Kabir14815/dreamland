import { useState } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects', sub: ['Latest Launches', 'Ongoing Projects', 'Completed Projects'] },
  { label: 'Dreamland Assist', href: '#pricing', sub: ['1% Payment Plan'] },
  { label: 'About Us', href: '#about', sub: ['Company Profile', 'Leadership Team', 'Our Journey'] },
  { label: 'Media', href: '#news', sub: ['News', 'Video', 'Blog'] },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const scrollTo = (e, href) => {
    e?.preventDefault()
    if (href?.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" onClick={(e) => scrollTo(e, '#')} className="logo">
          <span className="logo-dream">DREAM</span>
          <span className="logo-lands">LANDS</span>
          <span className="logo-infra">INFRA</span>
        </a>
        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={[item.sub ? 'has-dropdown' : '', openDropdown === item.label ? 'open' : ''].filter(Boolean).join(' ')}
                onMouseEnter={() => item.sub && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.sub && window.innerWidth <= 900) {
                      e.preventDefault()
                      toggleDropdown(item.label)
                    } else {
                      scrollTo(e, item.href)
                    }
                  }}
                >
                  {item.label}
                </a>
                {item.sub && (
                  <ul className={`dropdown ${openDropdown === item.label ? 'open' : ''}`}>
                    {item.sub.map((sub) => (
                      <li key={sub}>
                        <a href={item.href} onClick={(e) => scrollTo(e, item.href)}>{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a href="https://wa.me/919876543210" className="header-whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          WhatsApp
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
