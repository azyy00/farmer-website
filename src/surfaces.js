import { useColorModeValue } from '@chakra-ui/react'

// Card styling used to be copy-pasted into five files as four-layer pure-black
// rgba shadows with a translateY(-5px) hover on every single box. This is the
// one shared definition: a tinted shadow, a hairline border doing most of the
// separation work, and a restrained lift.
export const useSurface = ({ interactive = false } = {}) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const shadow = useColorModeValue('sm', 'darkSm')
  const hoverShadow = useColorModeValue('lg', 'darkLg')
  const hoverBorder = useColorModeValue('primary.200', 'primary.700')

  return {
    bg,
    border: '1px solid',
    borderColor,
    borderRadius: 'xl',
    boxShadow: shadow,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
    ...(interactive && {
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: hoverShadow,
        borderColor: hoverBorder,
      },
      _active: { transform: 'translateY(0) scale(0.995)' },
    }),
  }
}

// Long-form research copy: constrained measure, left-aligned. Justified text
// opens rivers of whitespace once the column narrows.
export const proseProps = {
  maxW: 'prose',
  fontSize: { base: 'md', md: 'lg' },
  lineHeight: 1.75,
  textAlign: 'left',
}
