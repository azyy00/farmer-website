import { Box, Flex, Text } from '@chakra-ui/react'

// The structural divider between operational units. A large index numeral, the
// unit label, a run of slashes filling the track, and a right-anchored telemetry
// string, all sitting on a 2px hazard-red rule. This is the primary
// wayfinding + section-marker device across the one-page document.
const SectionRule = ({ index, label, unit }) => (
  <Box
    borderTop="2px solid"
    borderColor="ink.500"
    bg="paper.500"
    px={{ base: 4, md: 8, xl: 12 }}
    pt={3}
    pb={0}
  >
    <Flex align="stretch" borderBottom="2px solid" borderColor="red.500" pb={3} gap={{ base: 3, md: 5 }}>
      <Text
        fontFamily="heading"
        fontWeight={900}
        lineHeight={0.8}
        fontSize={{ base: '2.6rem', md: '4rem' }}
        color="red.500"
        letterSpacing="-0.04em"
      >
        {index}
      </Text>
      <Flex direction="column" justify="center" flex="1" minW={0}>
        <Text
          fontFamily="heading"
          fontWeight={900}
          textTransform="uppercase"
          letterSpacing="-0.02em"
          lineHeight={0.95}
          fontSize={{ base: '1.4rem', md: '2rem' }}
          noOfLines={1}
        >
          {label}
        </Text>
        <Text
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color="gray.500"
          noOfLines={1}
        >
          {'/ '.repeat(30)}
        </Text>
      </Flex>
      <Text
        display={{ base: 'none', md: 'block' }}
        fontFamily="mono"
        fontSize="11px"
        letterSpacing="0.14em"
        textTransform="uppercase"
        color="ink.500"
        textAlign="right"
        alignSelf="flex-end"
        whiteSpace="nowrap"
      >
        {unit}
      </Text>
    </Flex>
  </Box>
)

export default SectionRule
