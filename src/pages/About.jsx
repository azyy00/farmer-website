import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const About = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('primary.600', 'primary.200');
  const bodyColor = useColorModeValue('gray.700', 'gray.200');
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.100');
  
  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4} fontFamily="heading" color={headingColor}>About the research</Heading>
            <Text fontSize="xl" color={bodyColor} fontFamily="body">
              Understanding Communication Challenges in Agricultural Implementation
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box height="100%">
              <VStack align="start" spacing={4} p={6} height="100%" border="1px solid" borderColor={cardBorder} borderRadius="xl">
                <Heading size="md" fontFamily="heading" color={headingColor}>Research Background</Heading>
                <Text fontFamily="body" color={bodyColor} maxW="prose">
                  This research investigates the communication challenges encountered in implementing
                  agricultural office initiatives within the Local Government Unit of Goa. The study
                  aims to identify barriers, analyze existing frameworks, and propose effective
                  solutions for improved agricultural governance and communication.
                </Text>
              </VStack>
            </Box>

            <Box height="100%">
              <VStack align="start" spacing={4} p={6} height="100%" border="1px solid" borderColor={cardBorder} borderRadius="xl">
                <Heading size="md" fontFamily="heading" color={headingColor}>Methodology</Heading>
                <Text fontFamily="body" color={bodyColor} maxW="prose">
                  The study employs a comprehensive research approach combining qualitative and
                  quantitative methods. This includes interviews with key stakeholders, surveys
                  of agricultural office staff, and analysis of existing communication channels
                  and protocols.
                </Text>
              </VStack>
            </Box>

            <Box height="100%">
              <VStack align="start" spacing={4} p={6} height="100%" border="1px solid" borderColor={cardBorder} borderRadius="xl">
                <Heading size="md" fontFamily="heading" color={headingColor}>Significance</Heading>
                <Text fontFamily="body" color={bodyColor} maxW="prose">
                  The findings of this research will contribute to:
                  • Improved communication strategies in agricultural governance
                  • Enhanced efficiency in agricultural office operations
                  • Better service delivery to farmers and stakeholders
                  • Development of more effective policy implementation frameworks
                </Text>
              </VStack>
            </Box>

            <Box height="100%">
              <VStack align="start" spacing={4} p={6} height="100%" border="1px solid" borderColor={cardBorder} borderRadius="xl">
                <Heading size="md" fontFamily="heading" color={headingColor}>Academic Context</Heading>
                <Text fontFamily="body" color={bodyColor} maxW="prose">
                  This research is conducted as part of the Bachelor of Arts in Communication
                  program, contributing to the broader understanding of organizational
                  communication in government agricultural sectors. The study combines
                  theoretical frameworks with practical applications in the field of
                  agricultural communication.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default About 