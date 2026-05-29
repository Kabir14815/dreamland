import { siteImages } from '../data/images.js'
import SectionHeader from './SectionHeader.jsx'

export default function Gallery() {
  const [featured, ...rest] = siteImages.gallery

  return (
    <section className="section section--dark" id="gallery">
      <div className="container">
        <SectionHeader
          eyebrow="Real Property Photos"
          title="Interior & Project Gallery"
          desc="Actual photos from our listings and Google profile — premium finishes, modern layouts and our Panchkula office."
        />

        <div className="gallery-layout">
          <figure className="gallery-hero">
            <img src={featured.src} alt={featured.title} loading="eager" />
            <figcaption>{featured.title}</figcaption>
          </figure>
          <div className="gallery-subgrid">
            {rest.slice(0, 4).map((item, i) => (
              <figure key={i} className="gallery-item">
                <img src={item.src} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
