import SectionHeader from './SectionHeader.jsx'

const locations = [
  { label: 'Prime', name: 'Panchkula', icon: 'building' },
  { label: 'Capital', name: 'Chandigarh', icon: 'zone' },
  { label: 'Growing', name: 'Mohali (SAS Nagar)', icon: 'road' },
  { label: 'Sector 15', name: 'Panchkula Office', icon: 'office' },
  { label: '24/7', name: 'Available for You', icon: 'clock' },
  { label: '4.833★', name: 'Google Rated', icon: 'star' },
]

function CellIcon({ type }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }
  switch (type) {
    case 'zone':
      return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v8M8 12h8" /></svg>
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
    case 'road':
      return <svg {...props}><path d="M4 12h16M8 6v12M16 6v12" /></svg>
    case 'building':
      return <svg {...props}><path d="M4 21V9l8-4 8 4v12M4 14h16M9 21v-4h6v4" /></svg>
    case 'star':
      return <svg {...props}><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" /></svg>
    case 'office':
      return <svg {...props}><path d="M8 6h8M8 12h8M8 18h4M4 6v12M20 6v12" /></svg>
    default:
      return null
  }
}

export default function WhyUs() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Budhiraja Property Consultant?"
          desc="A registered real estate consultancy serving the Tricity region with honest deals, transparent pricing and end-to-end property assistance."
        />
        <div className="why-grid">
          {locations.map((loc, i) => (
            <div key={i} className="why-cell">
              <div className="why-cell__icon"><CellIcon type={loc.icon} /></div>
              <div>
                <span className="why-cell__label">{loc.label}</span>
                <span className="why-cell__name">{loc.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
