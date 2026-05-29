export default function SectionHeader({ eyebrow, title, desc, action, center = false }) {
  return (
    <div className={`section-header${center ? ' section-header--center' : ''}`}>
      <div className="section-header__text">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2 className="section-title">{title}</h2>}
        {desc && <p className="section-desc">{desc}</p>}
      </div>
      {action && <div className="section-header__action">{action}</div>}
    </div>
  )
}
