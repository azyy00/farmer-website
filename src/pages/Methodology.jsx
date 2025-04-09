import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const MethodologySection = ({ title, content }) => (
  <Box 
    bg={useColorModeValue('white', 'gray.800')} 
    p={6} 
    borderRadius="lg"
    boxShadow="sm"
    border="1px"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
  >
    <Heading size="md" mb={4}>{title}</Heading>
    <Text textAlign="justify">{content}</Text>
  </Box>
)

const Methodology = () => {
  const sections = [
    {
      title: "Research Design",
      content: "This study used the qualitative method to investigate the effectiveness of communication strategies utilized by the Local Agriculture Office to improve agricultural outreach. The purpose is to learn about the perspectives, experiences, and insights of key stakeholders, notably rice farmers and agricultural office staff, regarding the communication techniques and strategies used."
    },
    {
      title: "Participants",
      content: "The participants in this study were rice farmers from Goa in Partido, with a target sample size of ten (10), who had previously participated in or profited from outreach initiatives and were carefully selected to participate in the study. The sample included a variety of farms, both small and large-scale operations."
    },
    {
      title: "Data Gathering Procedures",
      content: "Semi-structured, in-depth interviews with agriculture office personnel and rice farmers were performed to collect a variety of opinions and thoughts. The interviews focused on farmers' understanding, opinions, and experiences with the office's agricultural communication techniques. Discussions centered on the strategies' perceived utility, accessibility, and general effectiveness."
    },
    {
      title: "Data Gathering Instruments",
      content: "The researchers conducted semi-structured interviews with agricultural office workers as well as in-depth interviews with rice farmers. Interviews with farmers were done to learn more about their perspectives on communication tactics, the utility of various technologies, how well they suited their needs, the obstacles they faced, and suggestions for improvement."
    },
    {
      title: "Data Analysis",
      content: "This study's qualitative data analysis used a systematic coding method. Initially, open coding was employed, with transcripts from in-depth interviews being rigorously analyzed to identify relevant subjects and categories. Following that, axial coding grouped these initial codes into bigger categories, resulting in links between different concepts."
    }
  ]

  return (
    <Box py={12}>
      <Container maxW={'container.xl'}>
        <VStack spacing={8}>
          <Heading size="xl" textAlign="center" mb={4}>
            Research Methodology
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl">
            A comprehensive qualitative study examining communication strategies in agricultural outreach
          </Text>
          
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} width="full">
            {sections.map((section, index) => (
              <MethodologySection key={index} {...section} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Methodology 