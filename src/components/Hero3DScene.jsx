export default function Hero3DScene() {
  return (
    <div className="hero-3d-scene" aria-hidden="true">
      <div className="hero-3d-plane hero-3d-plane-1" />
      <div className="hero-3d-plane hero-3d-plane-2" />
      <div className="hero-3d-cube">
        <div className="cube-face cube-front" />
        <div className="cube-face cube-back" />
        <div className="cube-face cube-right" />
        <div className="cube-face cube-left" />
        <div className="cube-face cube-top" />
        <div className="cube-face cube-bottom" />
      </div>
      <div className="hero-3d-ring hero-3d-ring-1" />
      <div className="hero-3d-ring hero-3d-ring-2" />
      <div className="hero-3d-orb hero-3d-orb-1" />
      <div className="hero-3d-orb hero-3d-orb-2" />
    </div>
  )
}
