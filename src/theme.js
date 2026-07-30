import { extendTheme } from '@chakra-ui/react'

// SWISS INDUSTRIAL BRUTALISM
// Single light substrate: unbleached documentation paper, carbon ink, one
// hazard-red accent. No gradients, no soft shadows, no rounded corners.

const ink = '#0A0A0A'
const paper = '#F4F4F0'
const red = '#E61919'

// Monochrome document greys, warmed slightly toward the paper. Chakra's `gray`
// scale drives most surfaces and text across the reused page components.
const mono = {
  50: '#F4F4F0',
  100: '#EAE8E3',
  200: '#DAD8D2',
  300: '#BFBCB4',
  400: '#8F8D86',
  500: '#66645E',
  600: '#454340',
  700: '#2A2926',
  800: '#161513',
  900: '#0A0A0A',
}

// The pages historically coloured headings and accents with `green.*` /
// `primary.*`. Remapped so those references resolve to carbon ink rather than a
// colour - red is introduced deliberately in the section chrome, never by
// accident. `.400` stays red so existing focus rings and small accents pick up
// the one permitted accent.
const inkAccent = {
  50: '#F4F4F0',
  100: '#EAE8E3',
  200: '#DAD8D2',
  300: '#8F8D86',
  400: red,
  500: '#161513',
  600: ink,
  700: ink,
  800: ink,
  900: ink,
}

const hazard = {
  50: '#FDE8E8',
  100: '#FBC9C9',
  200: '#F79393',
  300: '#F25C5C',
  400: '#EF3B3B',
  500: red,
  600: '#C21212',
  700: '#8F0D0D',
  800: '#5E0808',
  900: '#2E0404',
}

const theme = extendTheme({
  config: {
    // Single substrate: light only. No dark mode, no system following.
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  fonts: {
    heading: "'Archivo Black', 'Arial Black', Impact, sans-serif",
    body: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
    mono: "'JetBrains Mono Variable', 'IBM Plex Mono', monospace",
  },

  fontWeights: { normal: 400, medium: 500, semibold: 600, bold: 700, black: 900 },

  colors: {
    ink: { 500: ink },
    paper: { 500: paper },
    primary: inkAccent,
    green: inkAccent,
    gray: mono,
    red: hazard,
    secondary: { 300: mono[300], 600: mono[600] },
    background: { light: paper, dark: paper },
  },

  // Hard offset shadows, never soft blur. This is the only permitted depth cue.
  shadows: {
    xs: '2px 2px 0 rgba(10,10,10,1)',
    sm: '3px 3px 0 rgba(10,10,10,1)',
    md: '4px 4px 0 rgba(10,10,10,1)',
    lg: '6px 6px 0 rgba(10,10,10,1)',
    xl: '8px 8px 0 rgba(10,10,10,1)',
    darkSm: '3px 3px 0 rgba(10,10,10,1)',
    darkMd: '4px 4px 0 rgba(10,10,10,1)',
    darkLg: '6px 6px 0 rgba(10,10,10,1)',
    darkXl: '8px 8px 0 rgba(10,10,10,1)',
    outline: `0 0 0 2px ${red}`,
  },

  // Absolute rejection of border-radius. Every corner is 90 degrees.
  radii: {
    none: '0', sm: '0', base: '0', md: '0', lg: '0', xl: '0', '2xl': '0', '3xl': '0', full: '0',
  },

  zIndices: {
    base: 0, raised: 10, sticky: 100, navigation: 1000,
    overlay: 1200, modal: 1400, toast: 1600, skipLink: 1800,
  },

  sizes: { prose: '68ch' },

  styles: {
    global: {
      html: { scrollBehavior: 'smooth' },
      body: {
        bg: paper,
        color: ink,
        fontFamily: "'Archivo Variable', Arial, sans-serif",
        fontFeatureSettings: "'kern'",
        // Faint mechanical grain, unified across the document.
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
      },
      'h1, h2, h3, h4': { textWrap: 'balance' },
      'table, [data-tabular]': { fontVariantNumeric: 'tabular-nums' },
      '::selection': { background: red, color: paper },
      '*:focus-visible': { outline: `3px solid ${red}`, outlineOffset: '2px' },
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

  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '-0.03em',
        lineHeight: 0.92,
        color: ink,
      },
      sizes: {
        '4xl': { fontSize: 'clamp(3.5rem, 11vw, 11rem)', letterSpacing: '-0.05em' },
        '3xl': { fontSize: 'clamp(2.6rem, 8vw, 6.5rem)', letterSpacing: '-0.045em' },
        '2xl': { fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.04em' },
        xl: { fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)', letterSpacing: '-0.03em' },
        lg: { fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', letterSpacing: '-0.025em' },
        md: { fontSize: '1.15rem', letterSpacing: '-0.01em' },
      },
    },

    Text: { baseStyle: { lineHeight: 1.55 } },

    Button: {
      baseStyle: {
        fontFamily: 'mono',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        borderRadius: 0,
        border: '2px solid',
        borderColor: ink,
        transition: 'transform 0.1s steps(2), background-color 0.1s, color 0.1s',
        _active: { transform: 'translate(2px, 2px)' },
      },
      variants: {
        solid: {
          bg: ink,
          color: paper,
          _hover: { bg: red, borderColor: ink, color: paper },
        },
        outline: {
          bg: 'transparent',
          color: ink,
          _hover: { bg: ink, color: paper },
        },
      },
    },

    Table: {
      baseStyle: {
        table: { borderCollapse: 'collapse' },
        th: {
          // Paper ground with a heavy rule, so the reused pages' inline ink
          // header colours stay legible (a filled-black header would hide them).
          fontFamily: 'mono',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontWeight: 700,
          fontSize: 'xs',
          color: ink,
          bg: paper,
          borderTop: '2px solid',
          borderBottom: '3px solid',
          borderRight: '1px solid',
          borderColor: ink,
        },
        td: {
          border: '1px solid',
          borderColor: ink,
          fontSize: 'sm',
        },
      },
    },

    Input: { baseStyle: { field: { borderRadius: 0 } } },
    Select: { baseStyle: { field: { borderRadius: 0 } } },
    Textarea: { baseStyle: { borderRadius: 0 } },
    Badge: { baseStyle: { borderRadius: 0, fontFamily: 'mono', textTransform: 'uppercase' } },
  },
})

export default theme
