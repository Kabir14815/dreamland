import { siteImages } from '../data/images.js'
import SectionHeader from './SectionHeader.jsx'

export default function Founder() {
  return (
    <section className="section section--warm">
      <div className="container">
        <SectionHeader
          eyebrow="About Us"
          title="Budhiraja Property Consultant (Regd.)"
          desc="We are a registered real estate consultancy based in Panchkula, specializing in property transactions across the Tricity region."
        />

        <div className="about-grid">
          <div className="about-grid__media">
            <img src={siteImages.about} alt="Budhiraja Property Consultant office interior" />
          </div>
          <div className="about-content">
            <h3>Best Property Dealers in Tricity</h3>
            <p>
              Whether you are looking to buy your dream home, sell a property, find a rental, or invest in commercial real estate — our team provides personalized guidance every step of the way. Visit us at Shop 33, Sector 15, Panchkula.
            </p>
            <ul className="about-highlights">
              <li>Registered Consultant</li>
              <li>4.833★ Google Rating</li>
              <li>Panchkula, CHD & Mohali</li>
              <li>Open 24 Hours</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Get Free Consultation</a>
          </div>
        </div>

        <div className="storefront">
          <img src={siteImages.storefront} alt="Budhiraja Property Consultant storefront, Sector 15 Panchkula" />
        </div>
      </div>
    </section>
  )
}
