import { Box, Container, Text, Heading, SimpleGrid, VStack, HStack, Link as ChakraLink, Divider, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const sections = [
  { label: 'Methodology', to: '/methodology' },
  { label: 'Results', to: '/results' },
  { label: 'Conclusion', to: '/conclusion' },
  { label: 'Researchers', to: '/researchers' },
  { label: 'About the study', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Footer = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'whiteAlpha.100')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const faint = useColorModeValue('gray.500', 'gray.500')
  const headingColor = useColorModeValue('primary.600', 'primary.200')
  const linkHover = useColorModeValue('primary.700', 'primary.200')

  return (
    <Box as="footer" bg={bg} color={muted} borderTop="1px solid" borderColor={border} mt="auto" width="100%">
      <Container maxW="6xl" py={{ base: 10, md: 14 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 10 }}>
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="md" color={headingColor} fontFamily="heading">
              Communication Challenges in Agricultural Programs
            </Heading>
            <Text fontSize="sm" maxW="38ch">
              A qualitative study of the Local Agricultural Office in Goa, Partido, Camarines Sur.
            </Text>
          </VStack>

          {/* Every page reachable from the bottom of every page, so long reads
              never dead-end. */}
          <VStack align="start" spacing={2}>
            <SimpleGrid columns={2} spacingX={6} spacingY={1} width="100%">
              {sections.map((item) => (
                <ChakraLink
                  key={item.to}
                  as={Link}
                  to={item.to}
                  fontSize="sm"
                  _hover={{ color: linkHover, textDecoration: 'underline' }}
                >
                  {item.label}
                </ChakraLink>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Research sites get cited; giving readers the reference saves them
              assembling it by hand. */}
          <VStack align="start" spacing={2}>
            <Text fontSize="xs" fontWeight="600" letterSpacing="0.1em" textTransform="uppercase" color={faint}>
              Cite this study
            </Text>
            <Text fontSize="sm" lineHeight="1.6">
              Biando, M. B., Castor, A. M. R., &amp; Borais, A. J. S. (2024).{' '}
              <Text as="em">
                Communication challenges in the implementation of agricultural programs by the Local
                Agricultural Office in Goa, Partido, Camarines Sur
              </Text>{' '}
              [Undergraduate thesis]. Partido State University.
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider my={{ base: 7, md: 9 }} borderColor={border} />

        <HStack
          justify="space-between"
          align={{ base: 'start', sm: 'center' }}
          flexDirection={{ base: 'column', sm: 'row' }}
          spacing={3}
          fontSize="xs"
          color={faint}
        >
          <Text>
            © 2024 Madelo B. Biando, Apple Mae R. Castor, Apple Jewel S. Borais. All rights reserved.
          </Text>
          <Text>
            Bachelor of Arts in Communication, Partido State University. Site by Anthony B. Azuela.
          </Text>
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer
