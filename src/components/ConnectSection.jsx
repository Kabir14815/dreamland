export default function ConnectSection() {
  return (
    <section className="connect-panel" aria-label="Connect with us">
      <div className="connect-panel__inner">
        <span className="eyebrow">Let's Talk</span>
        <h2>Connect With Us</h2>
        <p>Your trusted real estate partner in Panchkula, Chandigarh & Mohali.</p>
        <p className="connect-panel__sub">Open 24 hours · Shop 33, Sector 15, Panchkula</p>

        <div className="connect-links">
          <a href="tel:+919041078619" className="connect-link">
            <span>Call 090410 78619</span>
            <span>→</span>
          </a>
          <a href="https://wa.me/919041078619" className="connect-link" target="_blank" rel="noreferrer">
            <span>WhatsApp Us</span>
            <span>→</span>
          </a>
          <a href="#contact-form" className="connect-link">
            <span>Book a Site Visit</span>
            <span>→</span>
          </a>
        </div>

        <div className="connect-details">
          <div className="connect-details__item">
            <strong>Address</strong>
            <p>Shop Number 33, Sector 15, Panchkula, Haryana 134113</p>
          </div>
          <div className="connect-details__item">
            <strong>Phone</strong>
            <p>
              <a href="tel:+919041078619">090410 78619</a>
              {' · '}
              <a href="tel:+919888076544">98880 76544</a>
            </p>
          </div>
          <div className="connect-details__item">
            <strong>Hours</strong>
            <p>Open 24 Hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
