import { siteImages } from '../data/images.js'
import SectionHeader from './SectionHeader.jsx'

export default function FeaturedProjects() {
  return (
    <section className="section section--warm" id="properties">
      <div className="container">
        <SectionHeader
          eyebrow="Our Portfolio"
          title="Premium Properties in Tricity"
          desc="Handpicked residential and commercial listings across Panchkula, Chandigarh and Mohali — featuring real interior photos from our portfolio."
          action={<a href="#contact" className="btn btn-primary">Book a Site Visit</a>}
        />

        <div className="property-grid">
          {siteImages.showcases.map((item, i) => (
            <article key={i} className="property-card">
              <div className="property-card__media">
                <img src={item.src} alt={item.title} loading={i < 2 ? 'eager' : 'lazy'} />
                <span className="property-card__tag">{item.tag}</span>
              </div>
              <div className="property-card__body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#contact" className="property-card__link">Enquire now →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-cta">
          <div className="featured-cta__bg" style={{ backgroundImage: `url(${siteImages.featured})` }} />
          <div className="featured-cta__overlay" />
          <div className="featured-cta__content">
            <span className="eyebrow">Featured Listing</span>
            <h3>Premium homes with designer interiors</h3>
            <p>Flats, floors, plots & commercial — honest deals, transparent pricing across the Tricity region.</p>
            <div className="featured-cta__buttons">
              <a href="tel:+919041078619" className="btn btn-gold">Call for Best Price</a>
              <a href="#gallery" className="btn btn-outline-light">View Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
