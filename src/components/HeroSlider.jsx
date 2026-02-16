import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    label: 'Exterior',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    alt: 'Luxury apartment tower exterior',
  },
  {
    id: 2,
    label: 'Grand Lobby',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85',
    alt: 'Residential tower lobby',
  },
  {
    id: 3,
    label: 'Flat Interior',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    alt: 'Premium flat interior',
  },
  {
    id: 4,
    label: 'Tower View',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1920&q=85',
    alt: 'Residential high-rise buildings',
  },
]

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      <div className="hero-slider">
        <div
          className="hero-slider-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.id} className="hero-slide">
              <img src={s.image} alt={s.alt} className="hero-slide-img" />
              <div className="hero-slide-overlay" />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-content">
        <p className="hero-tag">Latest Launch</p>
        <h1 className="hero-title">DHOLERA BY DREAMLAND INFRA</h1>
        <p className="hero-subline">LIVE HERE. WORK HERE. FLATS & HIGH-RISES.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Register Interest</a>
          <a href="#projects" className="btn btn-outline">Discover</a>
        </div>
      </div>
      <div className="hero-tabs">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`hero-tab ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Slide ${s.label}`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
