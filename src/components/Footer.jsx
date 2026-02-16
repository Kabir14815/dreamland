export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" onClick={(e) => scrollTo(e, '#')} className="logo">
            <span className="logo-dream">DREAM</span>
            <span className="logo-lands">LANDS</span>
            <span className="logo-infra">INFRA</span>
          </a>
          <p>Premium flats & high-rise apartments in Dholera. Where dreams meet reality.</p>
        </div>
        <div className="footer-links">
          <a href="#projects" onClick={(e) => scrollTo(e, '#projects')}>Projects</a>
          <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a>
          <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a>
        </div>
        <p className="footer-copy">&copy; Dreamland Infra. All rights reserved.</p>
      </div>
    </footer>
  )
}
