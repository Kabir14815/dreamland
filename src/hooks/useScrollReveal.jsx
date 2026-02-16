import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -80px 0px',
}

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const opts = { ...defaultOptions, ...options }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      opts
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin])

  return [ref, visible]
}

export function ScrollReveal({ children, className = '', as: Component = 'div', ...props }) {
  const [ref, visible] = useScrollReveal()
  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal-visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
