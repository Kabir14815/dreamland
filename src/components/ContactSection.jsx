import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', propertyType: '', location: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Property Enquiry from Website')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProperty Type: ${form.propertyType}\nPreferred Location: ${form.location}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@budhirajaproperty.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-section__grid">
        <div className="contact-section__connect">
          <div className="contact-intro">
            <span className="eyebrow">Let&apos;s Talk</span>
            <h2>Connect With Us</h2>
            <p>Your trusted real estate partner in Panchkula, Chandigarh & Mohali.</p>
            <p className="contact-intro__sub">Open 24 hours · Shop 33, Sector 15, Panchkula</p>
          </div>

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

        <div className="contact-section__form">
          <div className="contact-intro">
            <span className="eyebrow">Enquire</span>
            <h2>Get in Touch</h2>
            <p className="contact-intro__sub">Share your requirements and we&apos;ll get back to you shortly.</p>
          </div>

          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" name="phone" required placeholder="Your phone number" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="propertyType">Property type</label>
              <select id="propertyType" name="propertyType" value={form.propertyType} onChange={handleChange}>
                <option value="">Select property type</option>
                <option value="residential-flat">Residential Flat</option>
                <option value="independent-floor">Independent Floor</option>
                <option value="plot">Plot / Land</option>
                <option value="commercial">Commercial</option>
                <option value="rental">Rental Property</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="location">Preferred location</label>
              <select id="location" name="location" value={form.location} onChange={handleChange}>
                <option value="">Select location</option>
                <option value="panchkula">Panchkula</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="mohali">Mohali</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your property requirements" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}
