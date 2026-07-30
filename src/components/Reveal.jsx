import { useRef } from 'react'
import { Box } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// GSAP scroll-reveal (gpt-taste: "Scrubbing Text Reveals" / "Image Scale & Fade").
// Each unit rises and resolves as it enters the viewport. Under reduced motion
// nothing animates and content renders in place.
//
// variant "rise"  - translateY + fade (default, for text/section blocks)
// variant "plate" - scale up from 0.94 + fade (for imagery)
const Reveal = ({ children, variant = 'rise', delay = 0, y = 44, ...props }) => {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (prefersReduced() || !ref.current) return
      const from =
        variant === 'plate'
          ? { autoAlpha: 0, scale: 0.94 }
          : { autoAlpha: 0, y }
      gsap.from(ref.current, {
        ...from,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 84%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref }
  )

  return (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  )
}

export default Reveal
