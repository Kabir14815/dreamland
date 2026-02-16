const FEATURED_IMAGE = 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=85'

export default function FeaturedProjects() {
  return (
    <section className="featured" id="projects">
      <div className="container">
        <p className="section-label">Featured</p>
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-desc">Premium flats & high-rise apartments in Dholera – India's first greenfield smart city.</p>
      </div>
      <div className="featured-single">
        <div className="featured-single-bg" style={{ backgroundImage: `url(${FEATURED_IMAGE})` }} />
        <div className="featured-single-overlay" />
      </div>
      <div className="container">
        <div className="featured-cta">
          <a href="#contact" className="btn btn-primary">Register Interest</a>
        </div>
      </div>
    </section>
  )
}
