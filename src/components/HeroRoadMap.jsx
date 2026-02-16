export default function HeroRoadMap() {
  return (
    <div className="hero-roadmap-wrap" aria-hidden="true">
      <svg
        className="hero-roadmap"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Roads – draw animation */}
        <path className="hero-road-path hero-road-path-1" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M0 350 H300" />
        <path className="hero-road-path hero-road-path-2" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M300 350 H600" />
        <path className="hero-road-path hero-road-path-3" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M600 350 H900" />
        <path className="hero-road-path hero-road-path-4" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M900 350 H1200" />
        <path className="hero-road-path hero-road-path-5" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M200 150 V350" />
        <path className="hero-road-path hero-road-path-6" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M200 350 V550" />
        <path className="hero-road-path hero-road-path-7" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M500 200 V350" />
        <path className="hero-road-path hero-road-path-8" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M500 350 V500" />
        <path className="hero-road-path hero-road-path-9" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M800 250 V350" />
        <path className="hero-road-path hero-road-path-10" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M800 350 V600" />
        <path className="hero-road-path hero-road-path-11" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M300 150 H500" />
        <path className="hero-road-path hero-road-path-12" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M600 200 H800" />
        <path className="hero-road-path hero-road-path-13" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M150 500 H350" />
        <path className="hero-road-path hero-road-path-14" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" strokeLinecap="round" d="M650 500 H950" />
        {/* Extra roads */}
        <path className="hero-road-path hero-road-path-18" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M0 180 H180" />
        <path className="hero-road-path hero-road-path-19" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M180 180 V280" />
        <path className="hero-road-path hero-road-path-20" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M1020 120 H1200" />
        <path className="hero-road-path hero-road-path-21" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M1020 120 V250" />
        <path className="hero-road-path hero-road-path-22" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M50 600 H250" />
        <path className="hero-road-path hero-road-path-23" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M950 450 H1200" />
        <path className="hero-road-path hero-road-path-24" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M400 80 V150" />
        <path className="hero-road-path hero-road-path-25" pathLength="1" stroke="#3d4a38" strokeWidth="1.5" strokeLinecap="round" d="M700 550 V650" />
        {/* Roundabouts */}
        <circle className="hero-road-path hero-road-path-15" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" fill="none" cx="200" cy="350" r="24" />
        <circle className="hero-road-path hero-road-path-16" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" fill="none" cx="500" cy="350" r="24" />
        <circle className="hero-road-path hero-road-path-17" pathLength="1" stroke="#3d4a38" strokeWidth="1.8" fill="none" cx="800" cy="350" r="24" />
        {/* Buildings – rectangular outlines that draw in */}
        <path className="hero-road-path hero-building hero-building-1" pathLength="1" stroke="#2d3528" strokeWidth="1.4" fill="none" d="M260 100 H440 V180 H260 Z" />
        <path className="hero-road-path hero-building hero-building-2" pathLength="1" stroke="#2d3528" strokeWidth="1.4" fill="none" d="M540 80 H780 V160 H540 Z" />
        <path className="hero-road-path hero-building hero-building-3" pathLength="1" stroke="#2d3528" strokeWidth="1.4" fill="none" d="M80 400 H220 V520 H80 Z" />
        <path className="hero-road-path hero-building hero-building-4" pathLength="1" stroke="#2d3528" strokeWidth="1.4" fill="none" d="M340 420 H620 V500 H340 Z" />
        <path className="hero-road-path hero-building hero-building-5" pathLength="1" stroke="#2d3528" strokeWidth="1.4" fill="none" d="M820 420 H1080 V560 H820 Z" />
        <path className="hero-road-path hero-building hero-building-6" pathLength="1" stroke="#2d3528" strokeWidth="1.2" fill="none" d="M120 220 H220 V300 H120 Z" />
        <path className="hero-road-path hero-building hero-building-7" pathLength="1" stroke="#2d3528" strokeWidth="1.2" fill="none" d="M980 280 H1100 V360 H980 Z" />
      </svg>
    </div>
  )
}
