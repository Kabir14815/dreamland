import SectionHeader from './SectionHeader.jsx'

const posts = [
  { date: 'May 2026', title: 'Panchkula Sector 15–20 seeing strong demand for 3 BHK flats', excerpt: 'Residential property prices remain stable with high buyer interest in well-connected sectors.' },
  { date: 'Apr 2026', title: 'Mohali IT corridor drives commercial real estate growth', excerpt: 'Office spaces and SCO plots in Aerocity and surrounding areas attract investors.' },
  { date: 'Mar 2026', title: 'Chandigarh luxury segment: premium apartments in demand', excerpt: 'High-end buyers continue to invest in upscale societies across the city.' },
  { date: 'Feb 2026', title: 'Tricity rental market update for 2026', excerpt: 'Rental yields remain attractive for 2 & 3 BHK flats near major employment hubs.' },
]

export default function News() {
  return (
    <section className="section section--warm" id="news">
      <div className="container">
        <SectionHeader
          eyebrow="Market Insights"
          title="Tricity Property Updates"
        />
        <div className="news-grid">
          {posts.map((post, i) => (
            <article key={i} className="news-card">
              <time>{post.date}</time>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className="btn btn-outline">Get Market Advice</a>
      </div>
    </section>
  )
}
