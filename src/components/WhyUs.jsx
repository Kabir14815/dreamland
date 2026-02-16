const locations = [
  { time: '10 MINS', name: 'SIR ACTIVATION ZONE', icon: 'zone' },
  { time: '15 MINS', name: 'DHOLERA INTERNATIONAL AIRPORT', icon: 'airport' },
  { time: '2 MINS', name: 'SIR BOUNDARY', icon: 'road' },
  { time: '10 MINS', name: 'BHAVNAGAR INDUSTRIAL ZONE', icon: 'building' },
  { time: '10 MINS', name: 'BLACK BUCK SANCTUARY', icon: 'nature' },
  { time: '—', name: 'MAJOR INDUSTRIAL CORRIDORS', icon: 'connect' },
]

function LocationIcon({ type }) {
  const className = 'why-location-icon'
  const style = { width: 36, height: 36 }
  switch (type) {
    case 'zone':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    case 'airport':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4l5 3 2 8h-4l-2-6h-2l-2 6H5l2-8 5-3V2z" />
        </svg>
      )
    case 'road':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12h16M4 8v8M20 8v8M8 6v12M16 6v12" />
        </svg>
      )
    case 'building':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 21V9l8-4 8 4v12M4 14h16M9 21v-4h6v4" />
        </svg>
      )
    case 'nature':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10c0-3.5-3-6-8-6s-8 2.5-8 6c0 6 8 10 8 10z" />
        </svg>
      )
    case 'connect':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 6h8M8 12h8M8 18h4M4 6v12M20 6v12" />
        </svg>
      )
    default:
      return <span className={className} style={style} />
  }
}

export default function WhyUs() {
  return (
    <section className="why-us panel-section" id="about">
      <div className="container why-us-inner">
        <p className="why-us-label">Why</p>
        <h2 className="why-us-title">DREAMLAND INFRA?</h2>
        <div className="why-us-grid">
          {locations.map((loc, i) => (
            <div key={i} className="why-us-cell">
              <LocationIcon type={loc.icon} />
              <div className="why-us-cell-text">
                <span className="why-us-time">{loc.time}</span>
                <span className="why-us-name">{loc.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
