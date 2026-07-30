import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import {
  PiHouse,
  PiBookOpenText,
  PiChartBar,
  PiLightbulb,
  PiUsersThree,
  PiEnvelopeSimple,
  PiList,
} from 'react-icons/pi'
import ColorModeMenu from './ColorModeMenu'
import { LogoMark } from './Logo'

// Phosphor rather than the Font Awesome solid set: one consistent stroke
// weight across the whole interface, and less of a default look.
const navItems = [
  { name: 'Home', path: '/', icon: <PiHouse /> },
  { name: 'Methodology', path: '/methodology', icon: <PiBookOpenText /> },
  { name: 'Results', path: '/results', icon: <PiChartBar /> },
  { name: 'Conclusion', path: '/conclusion', icon: <PiLightbulb /> },
  { name: 'Researchers', path: '/researchers', icon: <PiUsersThree /> },
  { name: 'Contact', path: '/contact', icon: <PiEnvelopeSimple /> },
]

const Navbar = () => {
  const location = useLocation()

  // Hooks must run unconditionally and in a stable order, so every colour is
  // resolved once here rather than inside the nav-item loop.
  const bg = useColorModeValue('rgba(250, 250, 248, 0.82)', 'rgba(26, 26, 23, 0.82)')
  const color = useColorModeValue('secondary.600', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const brandColor = useColorModeValue('primary.600', 'primary.200')
  const brandHoverColor = useColorModeValue('primary.700', 'primary.300')
  const hoverBg = useColorModeValue('primary.50', 'primary.900')
  const hoverColor = useColorModeValue('primary.700', 'primary.200')
  const activeBg = useColorModeValue('primary.100', 'primary.800')
  const activeColor = useColorModeValue('primary.700', 'primary.200')
  const logoGround = useColorModeValue('rgba(250,250,248,0.92)', 'rgba(26,26,23,0.92)')

  return (
    <Flex
      as="nav"
      aria-label="Main navigation"
      bg={bg}
      color={color}
      minH="64px"
      py={2}
      px={{ base: 4, md: 6, xl: 10 }}
      borderBottom="1px solid"
      borderColor={borderColor}
      align="center"
      justify="space-between"
      gap={3}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="navigation"
      backdropFilter="blur(14px) saturate(140%)"
      margin={0}
    >
      <Box
        as={Link}
        to="/"
        display="flex"
        alignItems="center"
        gap={2.5}
        sx={{ '--logo-ground': logoGround }}
        _hover={{ '& .brand-text': { color: brandHoverColor } }}
      >
        <LogoMark size={30} color={brandColor} title="Home" />
        <Text
          className="brand-text"
          fontFamily="heading"
          color={brandColor}
          fontWeight="600"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          letterSpacing="-0.02em"
          lineHeight={1.15}
          noOfLines={2}
          transition="color 0.2s"
        >
          Agricultural Office Challenges in Goa
        </Text>
      </Box>

      {/* Desktop navigation */}
      <Flex display={{ base: 'none', lg: 'flex' }} align="center">
        <Stack direction="row" spacing={1} align="center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Button
                key={item.path}
                as={Link}
                to={item.path}
                variant="ghost"
                size="sm"
                leftIcon={item.icon}
                aria-current={isActive ? 'page' : undefined}
                bg={isActive ? activeBg : undefined}
                color={isActive ? activeColor : undefined}
                fontWeight={isActive ? 600 : 500}
                position="relative"
                _hover={{ bg: hoverBg, color: hoverColor }}
                _after={
                  isActive
                    ? {
                        content: '""',
                        position: 'absolute',
                        left: '14px',
                        right: '14px',
                        bottom: '2px',
                        height: '2px',
                        borderRadius: 'full',
                        bg: 'currentColor',
                      }
                    : undefined
                }
              >
                {item.name}
              </Button>
            )
          })}
        </Stack>
      </Flex>

      <HStack spacing={2} flexShrink={0}>
        <ColorModeMenu />

        {/* Mobile navigation */}
        <Box display={{ base: 'block', lg: 'none' }}>
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="Open navigation menu"
              icon={<PiList />}
              variant="outline"
              _hover={{ bg: hoverBg }}
            />
            <MenuList zIndex="navigation">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <MenuItem
                    key={item.path}
                    as={Link}
                    to={item.path}
                    icon={item.icon}
                    aria-current={isActive ? 'page' : undefined}
                    bg={isActive ? hoverBg : undefined}
                    fontWeight={isActive ? 'semibold' : 'normal'}
                    _hover={{ bg: hoverBg, color: hoverColor }}
                  >
                    {item.name}
                  </MenuItem>
                )
              })}
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Flex>
  )
}

export default Navbar
