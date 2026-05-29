import { useState } from 'react'
import { useScrolledHeader } from '../hooks/useScrolledHeader.js'

const navLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolledHeader()

  const scrollTo = (e, href) => {
    e?.preventDefault()
    if (href?.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#" onClick={(e) => scrollTo(e, '#')} className="brand">
          <span className="brand__name">Budhiraja</span>
          <span className="brand__tag">Property Consultant · Regd.</span>
        </a>

        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={(e) => scrollTo(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+919041078619" className="btn btn-outline-light btn-sm">Call Now</a>
          <a href="https://wa.me/919041078619" className="btn btn-whatsapp btn-sm" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="menu-btn"
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
