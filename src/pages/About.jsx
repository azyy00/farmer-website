import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const About = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');
  
  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading mb={4} fontFamily={'heading'} color={useColorModeValue('black', 'white')}>About the Research</Heading>
            <Text fontSize="xl" color={useColorModeValue('black', 'white')} fontFamily={'body'}>
              Understanding Communication Challenges in Agricultural Implementation
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <VStack align="start" spacing={4} p={6} border="2px" borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')} borderRadius="lg">
                <Heading size="md" fontFamily={'heading'} color={useColorModeValue('black', 'white')}>Research Background</Heading>
                <Text fontFamily={'body'} color={useColorModeValue('black', 'white')}>
                  This research investigates the communication challenges encountered in implementing
                  agricultural office initiatives within the Local Government Unit of Goa. The study
                  aims to identify barriers, analyze existing frameworks, and propose effective
                  solutions for improved agricultural governance and communication.
                </Text>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={4} p={6} border="2px" borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')} borderRadius="lg">
                <Heading size="md" fontFamily={'heading'} color={useColorModeValue('black', 'white')}>Methodology</Heading>
                <Text fontFamily={'body'} color={useColorModeValue('black', 'white')}>
                  The study employs a comprehensive research approach combining qualitative and
                  quantitative methods. This includes interviews with key stakeholders, surveys
                  of agricultural office staff, and analysis of existing communication channels
                  and protocols.
                </Text>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={4} p={6} border="2px" borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')} borderRadius="lg">
                <Heading size="md" fontFamily={'heading'} color={useColorModeValue('black', 'white')}>Significance</Heading>
                <Text fontFamily={'body'} color={useColorModeValue('black', 'white')}>
                  The findings of this research will contribute to:
                  • Improved communication strategies in agricultural governance
                  • Enhanced efficiency in agricultural office operations
                  • Better service delivery to farmers and stakeholders
                  • Development of more effective policy implementation frameworks
                </Text>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={4} p={6} border="2px" borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')} borderRadius="lg">
                <Heading size="md" fontFamily={'heading'} color={useColorModeValue('black', 'white')}>Academic Context</Heading>
                <Text fontFamily={'body'} color={useColorModeValue('black', 'white')}>
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