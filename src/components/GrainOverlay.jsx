import { Box, useColorModeValue } from '@chakra-ui/react'

// A fixed, non-interactive film-grain layer. Pure flat vector surfaces read as
// sterile; a barely-visible noise texture gives the page some physical
// presence. Inlined as an SVG data URI so it costs no extra request.
const NOISE = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="140" height="140" filter="url(#n)" opacity="0.55"/>
  </svg>`.replace(/\s+/g, ' ')
)

const GrainOverlay = () => {
  const opacity = useColorModeValue(0.035, 0.05)

  return (
    <Box
      aria-hidden="true"
      position="fixed"
      inset={0}
      pointerEvents="none"
      zIndex="overlay"
      opacity={opacity}
      backgroundImage={`url("data:image/svg+xml,${NOISE}")`}
      backgroundRepeat="repeat"
      mixBlendMode={useColorModeValue('multiply', 'screen')}
      sx={{
        '@media (prefers-reduced-motion: reduce)': { opacity: 0.02 },
      }}
    />
  )
}

export default GrainOverlay
