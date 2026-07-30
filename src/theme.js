import { extendTheme } from '@chakra-ui/react'

// A single accent family. The pages historically reached for both `green.*`
// and `primary.*` as if they were different colours; aliasing `green` to the
// same ramp makes every existing usage land on one consistent accent.
const accent = {
  50: '#F1F7F1',
  100: '#DCEBDB',
  200: '#B9D6B8',
  300: '#8EBB8E',
  400: '#639B66',
  500: '#457C4C',
  600: '#33633C',
  700: '#284E30',
  800: '#1F3C26',
  900: '#182E1E',
}

// Neutrals carry a faint warm/olive tint so they sit with the accent instead of
// reading as a separate cool grey family.
const neutral = {
  50: '#FAFAF8',
  100: '#F2F2EE',
  200: '#E4E4DE',
  300: '#CDCDC5',
  400: '#A3A39A',
  500: '#78786F',
  600: '#585850',
  700: '#40403A',
  800: '#2A2A26',
  900: '#1A1A17',
}

const theme = extendTheme({
  config: {
    // System preference detection, so the site respects the visitor's OS
    // setting rather than always opening in light mode.
    initialColorMode: 'system',
    useSystemColorMode: false,
  },

  fonts: {
    heading: "'Newsreader Variable', Georgia, 'Times New Roman', serif",
    body: "'Outfit Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  colors: {
    primary: accent,
    // Alias so pre-existing `green.*` references resolve to the same ramp.
    green: accent,
    gray: neutral,
    secondary: { 300: neutral[300], 600: neutral[600] },
    background: { light: '#FFFFFF', dark: neutral[800] },
  },

  // Shadows are tinted with the accent hue rather than pure black, so they read
  // as light falling through the page instead of a grey smudge. One light
  // source, from above.
  shadows: {
    xs: '0 1px 2px -1px rgba(24, 46, 30, 0.10)',
    sm: '0 2px 4px -2px rgba(24, 46, 30, 0.12), 0 1px 2px -1px rgba(24, 46, 30, 0.07)',
    md: '0 6px 14px -6px rgba(24, 46, 30, 0.16), 0 2px 5px -2px rgba(24, 46, 30, 0.08)',
    lg: '0 14px 32px -12px rgba(24, 46, 30, 0.22), 0 5px 12px -6px rgba(24, 46, 30, 0.10)',
    xl: '0 26px 52px -20px rgba(24, 46, 30, 0.28), 0 10px 20px -12px rgba(24, 46, 30, 0.14)',
    darkSm: '0 2px 4px -2px rgba(0, 0, 0, 0.45), 0 1px 2px -1px rgba(0, 0, 0, 0.30)',
    darkMd: '0 6px 14px -6px rgba(0, 0, 0, 0.55), 0 2px 5px -2px rgba(0, 0, 0, 0.35)',
    darkLg: '0 14px 32px -12px rgba(0, 0, 0, 0.62), 0 5px 12px -6px rgba(0, 0, 0, 0.40)',
    darkXl: '0 26px 52px -20px rgba(0, 0, 0, 0.70), 0 10px 20px -12px rgba(0, 0, 0, 0.45)',
  },

  // Varied rather than one radius everywhere: tighter on inner elements,
  // softer on the containers that hold them.
  radii: {
    sm: '4px',
    md: '7px',
    lg: '12px',
    xl: '18px',
    '2xl': '26px',
  },

  // A named scale beats scattered magic numbers like 999 and 9999.
  zIndices: {
    base: 0,
    raised: 10,
    sticky: 100,
    navigation: 1000,
    overlay: 1200,
    modal: 1400,
    toast: 1600,
    skipLink: 1800,
  },

  sizes: {
    // Roughly 65 characters at the body size - the readable measure for the
    // long research passages on Home, Methodology and Conclusion.
    prose: '65ch',
  },

  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: props.colorMode === 'dark' ? neutral[900] : neutral[50],
        color: props.colorMode === 'dark' ? neutral[100] : neutral[800],
        fontFeatureSettings: "'kern', 'liga'",
      },
      // Paragraph rag: avoids single words stranded on a final line.
      p: { textWrap: 'pretty' },
      'h1, h2, h3, h4': { textWrap: 'balance' },
      // Figures in the results tables line up in columns.
      'table, [data-tabular]': { fontVariantNumeric: 'tabular-nums' },
      '::selection': {
        background: props.colorMode === 'dark' ? accent[700] : accent[100],
      },
      '*:focus-visible': {
        outline: '3px solid',
        outlineColor: accent[400],
        outlineOffset: '2px',
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
          scrollBehavior: 'auto !important',
        },
      },
    }),
  },

  components: {
    Heading: {
      baseStyle: {
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
      },
      sizes: {
        // Display sizes get heavier presence and tighter tracking.
        '3xl': { fontSize: ['2.1rem', '3rem', '3.8rem', '4.4rem'], letterSpacing: '-0.035em' },
        '2xl': { fontSize: ['1.9rem', '2.5rem', '3rem'], letterSpacing: '-0.03em' },
        xl: { fontSize: ['1.6rem', '2rem', '2.4rem'], letterSpacing: '-0.025em' },
        lg: { fontSize: ['1.45rem', '1.6rem', '1.8rem'], letterSpacing: '-0.02em' },
        md: { fontSize: ['1.15rem', '1.25rem'], letterSpacing: '-0.015em' },
      },
    },

    Text: {
      baseStyle: {
        lineHeight: 1.7,
      },
    },

    Button: {
      baseStyle: {
        fontWeight: 500,
        letterSpacing: '-0.005em',
        borderRadius: 'md',
        transition: 'transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
        // Physical press feedback rather than a dead click.
        _active: { transform: 'scale(0.98)' },
      },
    },

    Table: {
      baseStyle: {
        th: {
          // Small, tracked sentence case reads better than the shouty
          // all-caps default.
          textTransform: 'none',
          letterSpacing: '0.04em',
          fontFamily: 'body',
          fontWeight: 600,
          fontSize: 'sm',
        },
      },
    },
  },
})

export default theme
