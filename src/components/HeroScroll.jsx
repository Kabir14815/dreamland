import HeroRoadMap from './HeroRoadMap.jsx'

export default function HeroScroll() {
  return (
    <section className="hero-single" aria-label="Hero">
      <HeroRoadMap />
      <div className="hero-single-overlay" />
      <div className="hero-single-content">
        <p className="hero-tag">Latest Launch</p>
        <h1 className="hero-title">DHOLERA BY DREAMLAND INFRA</h1>
        <p className="hero-subline">LIVE HERE. WORK HERE. FLATS & HIGH-RISES.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Register Interest</a>
          <a href="#projects" className="btn btn-outline">Discover</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
