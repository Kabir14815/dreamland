import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', budget: '', unitType: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="contact panel-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="Your email" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" required placeholder="Your phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="unitType">Unit type</label>
            <select id="unitType" name="unitType" value={form.unitType} onChange={handleChange}>
              <option value="">Select unit type</option>
              <option value="studio">Studio</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="4bhk">4 BHK</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Your message" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}
