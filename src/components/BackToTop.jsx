import { useEffect, useState } from 'react'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { PiArrowUp } from 'react-icons/pi'

// The research pages are long; this gives readers a way back to the navigation
// without dragging the scrollbar all the way up.
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const bg = useColorModeValue('green.600', 'green.200')
  const color = useColorModeValue('white', 'gray.900')

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
  )
}

export default BackToTop
