import { Box, Flex, Text, Button, Stack, useColorModeValue, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem, IconButton, useDisclosure } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaHome, FaBook, FaStar, FaInfoCircle, FaUsers } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Methodology', path: '/methodology', icon: <FaBook /> },
    { name: 'Results', path: '/results', icon: <FaStar /> },
    { name: 'Conclusion', path: '/conclusion', icon: <FaInfoCircle /> },
    { name: 'Researchers', path: '/researchers', icon: <FaUsers /> },
  ]

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        position="sticky"
        top="0"
        zIndex="sticky"
        boxShadow="sm"
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('green.600', 'green.200')}
            fontWeight="bold"
            fontSize="lg"
            _hover={{
              color: useColorModeValue('green.700', 'green.300'),
              transition: 'all 0.2s'
            }}
          >
            <Link to="/">Agricultural Office Research</Link>
          </Text>

          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Stack direction={'row'} spacing={4}>
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    leftIcon={item.icon}
                    color={location.pathname === item.path ? 'green.500' : undefined}
                    _hover={{
                      bg: useColorModeValue('green.50', 'green.900'),
                      color: useColorModeValue('green.700', 'green.200'),
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s'
                    }}
                    _active={{
                      bg: useColorModeValue('green.100', 'green.800'),
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Flex>
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
                bg: useColorModeValue('green.50', 'green.900'),
              }}
            />
            <MenuList>
              {navItems.map((item) => (
                <MenuItem 
                  key={item.path} 
                  as={Link} 
                  to={item.path}
                  icon={item.icon}
                  bg={location.pathname === item.path ? useColorModeValue('green.50', 'green.900') : undefined}
                  _hover={{
                    bg: useColorModeValue('green.50', 'green.900'),
                    color: useColorModeValue('green.700', 'green.200'),
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar 