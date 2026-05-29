const stats = [
  { value: '4.833★', label: 'Google Rating' },
  { value: '24/7', label: 'Always Open' },
  { value: '3 Cities', label: 'Panchkula · CHD · Mohali' },
  { value: 'Regd.', label: 'Licensed Consultant' },
]

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Why clients trust us">
      <div className="container trust-bar__inner">
        {stats.map((item) => (
          <div key={item.label} className="trust-stat">
            <span className="trust-stat__value">{item.value}</span>
            <span className="trust-stat__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
