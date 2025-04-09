import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const About = () => {
  return (
    <Box py={12}>
      <Container maxW={'container.xl'}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading mb={4}>About the Research</Heading>
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')}>
              Understanding Communication Challenges in Agricultural Implementation
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <VStack align="start" spacing={4}>
                <Heading size="md">Research Background</Heading>
                <Text>
                  This research investigates the communication challenges encountered in implementing
                  agricultural office initiatives within the Local Government Unit of Goa. The study
                  aims to identify barriers, analyze existing frameworks, and propose effective
                  solutions for improved agricultural governance and communication.
                </Text>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={4}>
                <Heading size="md">Methodology</Heading>
                <Text>
                  The study employs a comprehensive research approach combining qualitative and
                  quantitative methods. This includes interviews with key stakeholders, surveys
                  of agricultural office staff, and analysis of existing communication channels
                  and protocols.
                </Text>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={4}>
                <Heading size="md">Significance</Heading>
                <Text>
                  The findings of this research will contribute to:
                  • Improved communication strategies in agricultural governance
                  • Enhanced efficiency in agricultural office operations
                  • Better service delivery to farmers and stakeholders
                  • Development of more effective policy implementation frameworks
                </Text>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={4}>
                <Heading size="md">Academic Context</Heading>
                <Text>
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