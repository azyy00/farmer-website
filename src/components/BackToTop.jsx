import { useEffect, useRef, useState } from 'react'
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import { PiArrowUp } from 'react-icons/pi'

// The research pages are long; this gives readers a way back to the navigation
// without dragging the scrollbar all the way up.
//
// Visibility is driven by an IntersectionObserver watching a sentinel near the
// top of the document. A scroll listener would fire on every frame and re-render
// the tree with it.
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sentinelRef = useRef(null)
  const bg = useColorModeValue('green.600', 'green.200')
  const color = useColorModeValue('white', 'gray.900')

  useEffect(() => {
    const node = sentinelRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Box
        ref={sentinelRef}
        aria-hidden="true"
        position="absolute"
        top="600px"
        height="1px"
        width="1px"
        pointerEvents="none"
      />
      <IconButton
        aria-label="Back to top"
        icon={<PiArrowUp />}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        position="fixed"
        bottom={{ base: 4, md: 8 }}
        right={{ base: 4, md: 8 }}
        zIndex="sticky"
        isRound
        size="lg"
        bg={bg}
        color={color}
        boxShadow="lg"
        opacity={isVisible ? 1 : 0}
        pointerEvents={isVisible ? 'auto' : 'none'}
        transform={isVisible ? 'translateY(0)' : 'translateY(10px)'}
        transition="opacity 0.25s ease, transform 0.25s ease"
        _hover={{ transform: 'translateY(-3px)' }}
      />
    </>
  )
}

export default BackToTop
