export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <a href="#" onClick={(e) => scrollTo(e, '#')} className="brand">
              <span className="brand__name">Budhiraja</span>
              <span className="brand__tag">Property Consultant · Regd.</span>
            </a>
            <p className="site-footer__desc">
              Real estate agent for Panchkula, Chandigarh and Mohali. Best property dealers with 4.833★ Google rating.
            </p>
            <p className="site-footer__address">
              Shop Number 33, Sector 15, Panchkula, Haryana 134113<br />
              <a href="tel:+919041078619">090410 78619</a> · <a href="tel:+919888076544">98880 76544</a> · Open 24 Hours
            </p>
          </div>
          <nav className="site-footer__links" aria-label="Footer">
            <a href="#properties" onClick={(e) => scrollTo(e, '#properties')}>Properties</a>
            <a href="#services" onClick={(e) => scrollTo(e, '#services')}>Services</a>
            <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a>
            <a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')}>Gallery</a>
            <a href="#reviews" onClick={(e) => scrollTo(e, '#reviews')}>Reviews</a>
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a>
          </nav>
        </div>
        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} Budhiraja Property Consultant (Regd.). All rights reserved.
        </p>
      </div>
    </footer>
  )
}
