const reasons = [
  { title: 'India\'s 1st', sub: 'Greenfield Smart City' },
  { title: 'Fastest Growing', sub: 'SIR in India' },
  { title: 'High Capital', sub: 'Appreciation' },
  { title: 'Ease of', sub: 'Investment' },
  { title: 'Government', sub: 'Push & Incentives' },
  { title: '1% Assured', sub: 'Monthly Return' },
  { title: 'Long-Term', sub: 'Value' },
  { title: 'World-Class', sub: 'Connectivity' },
]

export default function WhyInvest() {
  return (
    <section className="why-invest panel-section alt" id="why-dholera">
      <div className="container">
        <p className="section-label">Why</p>
        <h2 className="section-title">Invest in Dholera?</h2>
        <div className="reasons-grid invest-grid">
          {reasons.map((r, i) => (
            <article key={i} className="reason">
              <h3><span className="reason-title">{r.title}</span><span className="reason-sub">{r.sub}</span></h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
