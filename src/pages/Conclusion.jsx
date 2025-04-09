import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const Section = ({ title, content }) => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    p={6}
    borderRadius="lg"
    boxShadow="md"
    border="1px"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
  >
    <Heading size="md" mb={4} color={useColorModeValue('green.600', 'green.200')}>
      {title}
    </Heading>
    <Text textAlign="justify" fontSize="lg">
      {content}
    </Text>
  </Box>
)

const Conclusion = () => {
  return (
    <Box py={12}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12}>
          {/* Conclusion Section */}
          <Box width="full">
            <Heading size="xl" textAlign="center" mb={8}>
              Conclusion and Recommendations
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Section
                title="Conclusion"
                content="Despite their diversity, the Local Agricultural Office's communication tactics work best in places that are easily accessible and where farmers are acclimated to more conventional means of contact. However, these programs' reach is limited in places with poor infrastructure, including isolated barangays. The personal involvement of local agricultural authorities and community leaders has been crucial in breaking down communication barriers, notwithstanding certain outreach difficulties. The effectiveness of communication campaigns is determined by the nature of the outreach tool and how well it aligns with the target audience's skills, such as literacy levels and technological access."
              />
              
              <Section
                title="Recommendations"
                content="It is recommended that the Local Agricultural Office persist in employing a variety of communication techniques. More focus should be given to local newsletters and Facebook pages, as they have a larger audience, especially in rural areas. Giving farmers basic instructions on how to use mobile phones and online platforms for agricultural updates would help increase the efficacy of digital communication tools. Outreach initiatives would also be improved by ongoing training on digital communication strategies for agricultural officers. To improve communication infrastructure in rural locations, the Local Agricultural Office should invest more funds in things like better transportation for outreach workers and improved internet connectivity."
              />
            </SimpleGrid>
          </Box>

          {/* Key Takeaways */}
          <Box width="full">
            <Heading size="lg" textAlign="center" mb={6}>
              Key Takeaways
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box
                bg={useColorModeValue('green.50', 'green.900')}
                p={6}
                borderRadius="lg"
                textAlign="center"
              >
                <Heading size="sm" mb={3}>
                  Communication Diversity
                </Heading>
                <Text>
                  Multiple communication channels are essential for reaching all farmers effectively
                </Text>
              </Box>
              <Box
                bg={useColorModeValue('green.50', 'green.900')}
                p={6}
                borderRadius="lg"
                textAlign="center"
              >
                <Heading size="sm" mb={3}>
                  Infrastructure Needs
                </Heading>
                <Text>
                  Improved infrastructure is crucial for better program implementation
                </Text>
              </Box>
              <Box
                bg={useColorModeValue('green.50', 'green.900')}
                p={6}
                borderRadius="lg"
                textAlign="center"
              >
                <Heading size="sm" mb={3}>
                  Digital Integration
                </Heading>
                <Text>
                  Gradual integration of digital tools while maintaining traditional methods
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Conclusion 