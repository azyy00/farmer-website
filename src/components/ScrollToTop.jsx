import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets the scroll position whenever the route changes, so a visitor who was
// deep inside Results does not land halfway down Conclusion.
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }, [pathname])

  return null
}

export default ScrollToTop
