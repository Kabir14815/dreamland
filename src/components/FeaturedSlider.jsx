import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    label: 'Tower Exterior',
    image: 'https://images.unsplash.com/photo-1449824918235-c16570a90e6b?w=1200&q=85',
  },
  {
    id: 2,
    label: 'Grand Lobby',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=85',
  },
  {
    id: 3,
    label: 'Flat Interior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85',
  },
  {
    id: 4,
    label: 'Building & Amenities',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=85',
  },
  {
    id: 5,
    label: 'High-Rise View',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85',
  },
]

export default function FeaturedSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="featured-slider">
      <div
        className="featured-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.id} className="featured-slide">
            <img src={s.image} alt={s.label} className="featured-slide-img" />
            <span className="featured-slide-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="featured-slider-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${s.label}`}
          />
        ))}
      </div>
    </div>
  )
}
