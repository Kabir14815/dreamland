import { useState, useEffect, useCallback } from 'react'
import { siteImages } from '../data/images.js'

const slides = siteImages.hero
const INTERVAL = 6000

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index) => {
    setActiveIndex((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => goTo(activeIndex + 1), INTERVAL)
    return () => clearInterval(t)
  }, [activeIndex, isPaused, goTo])

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero__slides" aria-hidden>
        {slides.map((s, i) => (
          <div key={s.src} className={`hero__slide${i === activeIndex ? ' is-active' : ''}`}>
            <img src={s.src} alt="" />
            <div className="hero__overlay" />
          </div>
        ))}
      </div>

      <div className="container hero__body">
        <div className="hero__content">
          <div className="hero__badges">
            <span className="hero__badge hero__badge--gold">★ 4.833 Google Rating</span>
            <span className="hero__badge">Open 24 Hours</span>
            <span className="hero__badge">Tricity Expert</span>
          </div>

          <h1 className="hero__title">
            Premium Real Estate in <em>Panchkula</em>
          </h1>
          <p className="hero__subtitle">Budhiraja Property Consultant (Regd.)</p>
          <p className="hero__desc">
            Buy, sell and rent residential & commercial properties across Panchkula, Chandigarh and Mohali — trusted local expertise from Shop 33, Sector 15.
          </p>

          <div className="hero__cta">
            <a href="tel:+919041078619" className="btn btn-gold btn-lg">Call 090410 78619</a>
            <a href="https://wa.me/919041078619" className="btn btn-whatsapp btn-lg" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <a href="#properties" className="btn btn-outline-light btn-lg">View Properties</a>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__dots" role="tablist" aria-label="Hero slides">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={s.label}
                className={`hero__dot${i === activeIndex ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <p className="hero__slide-label">{slides[activeIndex].label}</p>
        </div>
      </div>

      <a href="#properties" className="hero__scroll" aria-label="Scroll to properties">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </a>
    </section>
  )
}
