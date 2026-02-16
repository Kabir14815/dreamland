const posts = [
  { date: '16 Feb, 2026', title: 'Dholera residential project pre-launch opens for investors', excerpt: 'Premium flats & high-rises in India\'s first greenfield smart city.' },
  { date: '10 Feb, 2026', title: 'Dreamland Infra announces 1% monthly assured return scheme', excerpt: 'Limited-time offer for early investors in Dholera SIR.' },
  { date: '05 Feb, 2026', title: 'India\'s strategic move into semiconductors boosts Dholera', excerpt: 'Dholera at the forefront of industrial and tech growth.' },
  { date: '01 Feb, 2026', title: 'Location advantages: 10 min from SIR Activation Zone', excerpt: 'Connectivity and appreciation in focus for your new flat.' },
]

export default function News() {
  return (
    <section className="news panel-section alt" id="news">
      <div className="container">
        <p className="section-label">Latest</p>
        <h2 className="section-title">Blogs</h2>
        <h2 className="section-title">News & Events</h2>
        <div className="news-grid">
          {posts.map((post, i) => (
            <article key={i} className="news-card">
              <time>{post.date}</time>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className="btn btn-outline">View More</a>
      </div>
    </section>
  )
}
