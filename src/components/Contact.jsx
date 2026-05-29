import { useState } from 'react'

export default function Contact() {
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
    <section className="contact-panel" id="contact">
      <div className="contact-panel__inner">
        <span className="eyebrow">Enquire</span>
        <h2>Get in Touch</h2>
        <p className="contact-panel__lead">Share your requirements and we&apos;ll get back to you shortly.</p>

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
    </section>
  )
}
