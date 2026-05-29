import SectionHeader from './SectionHeader.jsx'

const services = [
  { title: 'Buy Property', sub: 'Residential & Commercial' },
  { title: 'Sell Property', sub: 'Quick & Fair Valuation' },
  { title: 'Rent & Lease', sub: 'Flats, Offices & Shops' },
  { title: 'Builder Floors', sub: 'Independent Living' },
  { title: 'Plots & Land', sub: 'Approved Colonies' },
  { title: 'Investment', sub: 'High-Growth Areas' },
  { title: 'Legal Support', sub: 'Documentation Help' },
  { title: 'Site Visits', sub: 'Free Property Tours' },
]

export default function WhyInvest() {
  return (
    <section className="section section--dark" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          desc="Complete real estate solutions for buyers, sellers and investors across Panchkula, Chandigarh and Mohali."
        />
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="service-card__num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
