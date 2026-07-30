import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react'
import { PiSunDim, PiMoonStars, PiDesktopTower } from 'react-icons/pi'

// A three-way control (light / dark / follow system) rather than the ubiquitous
// sun-moon flip switch, and it respects the visitor's OS setting by default.
const ColorModeMenu = () => {
  const { colorMode, setColorMode } = useColorMode()
  const buttonBg = useColorModeValue('gray.100', 'gray.800')
  const buttonHoverBg = useColorModeValue('gray.200', 'gray.700')

  const stored = typeof window !== 'undefined' ? window.localStorage.getItem('chakra-ui-color-mode-manual') : null
  const selected = stored === 'system' || stored === null ? 'system' : colorMode

  const choose = (value) => {
    window.localStorage.setItem('chakra-ui-color-mode-manual', value)
    if (value === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setColorMode(prefersDark ? 'dark' : 'light')
    } else {
      setColorMode(value)
    }
  }

  return (
    <Menu autoSelect={false} placement="bottom-end">
      <Tooltip label="Appearance" openDelay={400}>
        <MenuButton
          as={IconButton}
          aria-label="Appearance settings"
          icon={colorMode === 'dark' ? <PiMoonStars /> : <PiSunDim />}
          variant="ghost"
          isRound
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          fontSize="18px"
        />
      </Tooltip>
      <MenuList zIndex="navigation" minW="180px">
        <MenuOptionGroup type="radio" value={selected} onChange={choose} title="Appearance">
          <MenuItemOption value="light" icon={<PiSunDim />}>
            Light
          </MenuItemOption>
          <MenuItemOption value="dark" icon={<PiMoonStars />}>
            Dark
          </MenuItemOption>
          <MenuItemOption value="system" icon={<PiDesktopTower />}>
            Match system
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default ColorModeMenu
