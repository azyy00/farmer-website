import { useCallback, useEffect, useState } from 'react'
import { Box, Flex, Text, HStack, IconButton, Collapse, VStack } from '@chakra-ui/react'
import { LogoMark } from './Logo'

const navItems = [
  { id: 'top', label: 'Home', code: 'D-01' },
  { id: 'methodology', label: 'Method', code: 'D-02' },
  { id: 'results', label: 'Results', code: 'D-03' },
  { id: 'conclusion', label: 'Conclusion', code: 'D-04' },
  { id: 'researchers', label: 'Team', code: 'D-05' },
  { id: 'contact', label: 'Contact', code: 'D-06' },
]

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', id === 'top' ? '/' : `/#${id}`)
  }
}

const Navbar = () => {
  const [active, setActive] = useState('top')
  const [open, setOpen] = useState(false)

  // Active-unit tracking via IntersectionObserver rather than a scroll handler.
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean)
    if (!sections.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const go = useCallback((id) => {
    setOpen(false)
    scrollToId(id)
  }, [])

  return (
    <Box
      as="nav"
      aria-label="Main navigation"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="navigation"
      bg="paper.500"
      borderBottom="2px solid"
      borderColor="ink.500"
    >
      <Flex
        minH="64px"
        align="center"
        justify="space-between"
        px={{ base: 3, md: 6, xl: 10 }}
        gap={4}
      >
        <Flex
          as="button"
          onClick={() => go('top')}
          align="center"
          gap={2.5}
          sx={{ '--logo-ground': '#F4F4F0' }}
          textAlign="left"
        >
          <LogoMark size={30} color="#0A0A0A" title="Home" />
          <Text
            fontFamily="heading"
            fontWeight={900}
            textTransform="uppercase"
            fontSize={{ base: '0.7rem', md: '0.9rem' }}
            letterSpacing="-0.01em"
            lineHeight={0.95}
            noOfLines={2}
            maxW={{ base: '150px', md: 'none' }}
          >
            Agricultural Office Challenges / Goa
          </Text>
        </Flex>

        {/* Desktop unit index */}
        <HStack display={{ base: 'none', lg: 'flex' }} spacing={0} height="64px">
          {navItems.map((item) => {
            const on = active === item.id
            return (
              <Box
                as="button"
                key={item.id}
                onClick={() => go(item.id)}
                aria-current={on ? 'page' : undefined}
                height="100%"
                px={4}
                borderLeft="1px solid"
                borderColor="ink.500"
                bg={on ? 'ink.500' : 'transparent'}
                color={on ? 'paper.500' : 'ink.500'}
                fontFamily="mono"
                fontSize="12px"
                fontWeight={700}
                textTransform="uppercase"
                letterSpacing="0.08em"
                transition="none"
                _hover={on ? {} : { bg: 'red.500', color: 'paper.500' }}
              >
                {item.label}
              </Box>
            )
          })}
        </HStack>

        {/* Mobile trigger */}
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          variant="outline"
          fontFamily="mono"
          fontWeight={700}
          icon={<Text fontFamily="mono">{open ? '[X]' : '[≡]'}</Text>}
        />
      </Flex>

      {/* Mobile unit index */}
      <Collapse in={open} animateOpacity>
        <VStack
          display={{ lg: 'none' }}
          spacing={0}
          align="stretch"
          borderTop="2px solid"
          borderColor="red.500"
        >
          {navItems.map((item) => {
            const on = active === item.id
            return (
              <Flex
                as="button"
                key={item.id}
                onClick={() => go(item.id)}
                width="100%"
                justify="space-between"
                align="center"
                px={4}
                py={3}
                borderBottom="1px solid"
                borderColor="ink.500"
                bg={on ? 'ink.500' : 'transparent'}
                color={on ? 'paper.500' : 'ink.500'}
                fontFamily="mono"
                fontWeight={700}
                textTransform="uppercase"
                letterSpacing="0.08em"
                fontSize="13px"
              >
                <Text>{item.label}</Text>
                <Text opacity={0.6}>{item.code}</Text>
              </Flex>
            )
          })}
        </VStack>
      </Collapse>
    </Box>
  )
}

export default Navbar
