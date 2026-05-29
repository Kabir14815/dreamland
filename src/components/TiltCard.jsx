import { useTilt } from '../hooks/useTilt.js'

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  as: Tag = 'div',
  ...props
}) {
  const { ref, glareRef, onMove, onLeave } = useTilt({ maxTilt, scale })

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      <div className="tilt-card-inner">{children}</div>
      <div ref={glareRef} className="tilt-card-glare" aria-hidden />
    </Tag>
  )
}
