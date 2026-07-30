import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'

// Brand mark - Metaphor Fusion (brandkit method 3): a speech form carrying a
// sprout. Communication (the rounded broadcast container) delivering
// agricultural growth (the two-leaf shoot) to farmers. One idea, geometric,
// legible from 16px favicon to full display.
export const LogoMark = ({ size = 28, title = 'Study logo', ...props }) => (
  <Box
    as="svg"
    viewBox="0 0 64 64"
    width={`${size}px`}
    height={`${size}px`}
    role="img"
    aria-label={title}
    flexShrink={0}
    {...props}
  >
    <title>{title}</title>
    {/* Broadcast / speech container */}
    <path
      d="M14 8h36a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H30l-11 9v-9h-5a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6Z"
      fill="currentColor"
    />
    {/* Sprout carried inside: stem plus two leaves, cut from the container */}
    <path
      d="M32 40V24"
      stroke="var(--logo-ground, #FAFAF8)"
      strokeWidth="3.4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M32 27c-1.5-5-6-7-11-7 0 5.5 4 9 11 9Z"
      fill="var(--logo-ground, #FAFAF8)"
    />
    <path
      d="M32 23c1.4-4.4 5.4-6.2 9.8-6.2 0 4.9-3.6 8-9.8 8Z"
      fill="var(--logo-ground, #FAFAF8)"
    />
  </Box>
)

// Lockup: mark plus the serif wordmark used in the navigation and footer.
const Logo = ({ size = 26, showText = true, ...props }) => {
  const markColor = useColorModeValue('primary.600', 'primary.200')
  const ground = useColorModeValue('#FAFAF8', '#1A1A17')

  return (
    <HStack spacing={2.5} align="center" sx={{ '--logo-ground': ground }} {...props}>
      <LogoMark size={size} color={markColor} title="Communication Challenges in Agricultural Programs" />
      {showText && (
        <Text
          fontFamily="heading"
          fontWeight="600"
          fontSize={{ base: 'md', md: 'lg' }}
          letterSpacing="-0.02em"
          lineHeight={1.15}
          color={markColor}
          noOfLines={2}
        >
          Agricultural Office Challenges in Goa
        </Text>
      )}
    </HStack>
  )
}

export default Logo
