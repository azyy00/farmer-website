import { Box, Flex, Text, Button, Stack, useColorModeValue, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem, IconButton, useDisclosure, useColorMode, Switch, HStack } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaHome, FaBook, FaStar, FaInfoCircle, FaUsers, FaSun, FaMoon, FaEnvelope } from 'react-icons/fa'
import { keyframes } from '@emotion/react'

// Define animations
const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Navbar = () => {
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Methodology', path: '/methodology', icon: <FaBook /> },
    { name: 'Results', path: '/results', icon: <FaStar /> },
    { name: 'Conclusion', path: '/conclusion', icon: <FaInfoCircle /> },
    { name: 'Researchers', path: '/researchers', icon: <FaUsers /> },
    { name: 'Contact Us', path: '/contact', icon: <FaEnvelope /> },
  ]

  return (
    <Flex
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')}
      color={useColorModeValue('secondary.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('secondary.300', 'gray.900')}
      align={'center'}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={1000}
      backdropFilter="blur(10px)"
      boxShadow="0 2px 10px rgba(0,0,0,0.05)"
    >
      <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'space-between' }} align="center">
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('primary.600', 'primary.200')}
          fontWeight="bold"
          fontSize="lg"
          _hover={{
            color: useColorModeValue('primary.700', 'primary.300'),
            transition: 'all 0.2s'
          }}
        >
          <Link to="/">Agricultural Office Challenges in Goa</Link>
        </Text>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} ml={10} align="center">
          <Stack direction={'row'} spacing={4} align="center">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  leftIcon={item.icon}
                  color={location.pathname === item.path ? 'primary.600' : undefined}
                  _hover={{
                    bg: useColorModeValue('primary.50', 'primary.900'),
                    color: useColorModeValue('primary.700', 'primary.200'),
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s'
                  }}
                  _active={{
                    bg: useColorModeValue('primary.100', 'primary.800'),
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Stack>
        </Flex>

        {/* Dark Mode Toggle */}
        <HStack 
          spacing={2} 
          ml={4}
          p={2}
          borderRadius="full"
          bg={useColorModeValue('gray.100', 'gray.700')}
          transition="all 0.3s ease"
          _hover={{
            bg: useColorModeValue('gray.200', 'gray.600'),
          }}
        >
          <Box 
            as={FaSun} 
            color={useColorModeValue('orange.400', 'gray.400')}
            transition="all 0.5s ease"
            animation={colorMode === 'light' ? `${rotateAnimation} 4s linear infinite` : 'none'}
            opacity={colorMode === 'light' ? 1 : 0.3}
            fontSize="18px"
          />
          <Switch
            colorScheme="green"
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
            size="md"
            sx={{
              '& .chakra-switch__track': {
                transition: 'all 0.3s ease',
              },
              '& .chakra-switch__thumb': {
                transition: 'all 0.3s ease',
                _before: {
                  transition: 'all 0.3s ease',
                }
              }
            }}
          />
          <Box 
            as={FaMoon} 
            color={useColorModeValue('gray.400', 'blue.200')}
            transition="all 0.5s ease"
            transform={colorMode === 'dark' ? 'rotate(360deg)' : 'rotate(0deg)'}
            opacity={colorMode === 'dark' ? 1 : 0.3}
            fontSize="16px"
          />
        </HStack>
      </Flex>

      {/* Mobile Navigation */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            onClick={onToggle}
            _hover={{
              bg: useColorModeValue('primary.50', 'primary.900'),
            }}
          />
          <MenuList>
            {navItems.map((item) => (
              <MenuItem 
                key={item.path} 
                as={Link} 
                to={item.path}
                icon={item.icon}
                bg={location.pathname === item.path ? useColorModeValue('primary.50', 'primary.900') : undefined}
                _hover={{
                  bg: useColorModeValue('primary.50', 'primary.900'),
                  color: useColorModeValue('primary.700', 'primary.200'),
                }}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar 