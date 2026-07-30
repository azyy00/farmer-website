import { extendTheme } from '@chakra-ui/react'

// The app referenced shades such as `primary.50`, `primary.700` and
// `primary.900` that were never defined, so those hovers and highlights
// silently resolved to nothing. Define the full scale instead.
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    body: '"Roboto", "Segoe UI", sans-serif',
  },
  colors: {
    primary: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    secondary: {
      300: '#A0AEC0',
      600: '#4A5568',
    },
    background: {
      light: '#FFFFFF',
      dark: '#1A202C',
    },
  },
  styles: {
    global: {
      // Keyboard users need to see where they are; the default outline was
      // being suppressed by Chakra's reset on several custom-styled controls.
      '*:focus-visible': {
        outline: '3px solid',
        outlineColor: 'primary.400',
        outlineOffset: '2px',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
          scrollBehavior: 'auto !important',
        },
      },
    },
  },
})

export default theme
