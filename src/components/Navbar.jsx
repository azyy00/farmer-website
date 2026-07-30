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
  useColorMode,
  HStack,
  Tooltip,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaHome, FaBook, FaStar, FaInfoCircle, FaUsers, FaSun, FaMoon, FaEnvelope } from 'react-icons/fa'

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Methodology', path: '/methodology', icon: <FaBook /> },
  { name: 'Results', path: '/results', icon: <FaStar /> },
  { name: 'Conclusion', path: '/conclusion', icon: <FaInfoCircle /> },
  { name: 'Researchers', path: '/researchers', icon: <FaUsers /> },
  { name: 'Contact Us', path: '/contact', icon: <FaEnvelope /> },
]

const Navbar = () => {
  const location = useLocation()
  const { colorMode, toggleColorMode } = useColorMode()

  // Hooks must run unconditionally and in a stable order, so every colour is
  // resolved once here rather than inside the nav-item loop.
  const bg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')
  const color = useColorModeValue('secondary.600', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const brandColor = useColorModeValue('primary.600', 'primary.200')
  const brandHoverColor = useColorModeValue('primary.700', 'primary.300')
  const hoverBg = useColorModeValue('primary.50', 'primary.900')
  const hoverColor = useColorModeValue('primary.700', 'primary.200')
  const activeBg = useColorModeValue('primary.100', 'primary.800')
  const activeColor = useColorModeValue('primary.700', 'primary.200')
  const toggleBg = useColorModeValue('gray.100', 'gray.700')
  const toggleHoverBg = useColorModeValue('gray.200', 'gray.600')

  const isDark = colorMode === 'dark'

  return (
    <Flex
      as="nav"
      aria-label="Main navigation"
      bg={bg}
      color={color}
      minH="60px"
      py={2}
      px={4}
      borderBottom="1px solid"
      borderColor={borderColor}
      align="center"
      justify="space-between"
      gap={3}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
      margin={0}
    >
      <Text
        fontFamily="heading"
        color={brandColor}
        fontWeight="bold"
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        noOfLines={2}
        _hover={{ color: brandHoverColor }}
        transition="color 0.2s"
      >
        <Link to="/">Agricultural Office Challenges in Goa</Link>
      </Text>

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
                _hover={{ bg: hoverBg, color: hoverColor, transform: 'translateY(-2px)' }}
                _active={{ bg: activeBg }}
                transition="all 0.2s"
              >
                {item.name}
              </Button>
            )
          })}
        </Stack>
      </Flex>

      <HStack spacing={2} flexShrink={0}>
        {/* Colour mode toggle: a single labelled button is easier to operate
            (and to announce) than an unlabelled switch flanked by icons. */}
        <Tooltip label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
          <IconButton
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            variant="ghost"
            isRound
            bg={toggleBg}
            _hover={{ bg: toggleHoverBg }}
          />
        </Tooltip>

        {/* Mobile navigation */}
        <Box display={{ base: 'block', lg: 'none' }}>
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="Open navigation menu"
              icon={<HamburgerIcon />}
              variant="outline"
              _hover={{ bg: hoverBg }}
            />
            <MenuList zIndex={1100}>
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
