import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const ResearcherCard = ({ name, role, description }) => {
  return (
    <Box
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      rounded={'lg'}
      textAlign={'center'}
    >
      <VStack spacing={3}>
        <Heading size="md">{name}</Heading>
        <Text color={useColorModeValue('green.600', 'green.200')} fontWeight="bold">
          {role}
        </Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {description}
        </Text>
      </VStack>
    </Box>
  )
}

const Researchers = () => {
  const researchers = [
    {
      name: 'Madelo B. Biando',
      role: 'Lead Researcher',
      description: 'Focused on communication frameworks and implementation strategies.'
    },
    {
      name: 'Apple Mae R. Castor',
      role: 'Researcher',
      description: 'Specialized in data collection and analysis methodologies.'
    },
    {
      name: 'Apple Jewel S. Borais',
      role: 'Researcher',
      description: 'Expert in agricultural communication systems and local governance.'
    },
    {
      name: 'Ruth Daphne Prila Pesimo',
      role: 'Research Adviser',
      description: 'Providing guidance and expertise in research methodology and communication studies.'
    }
  ]

  return (
    <Box py={12}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading mb={4}>Research Team</Heading>
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')}>
              Meet the dedicated researchers behind this study
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} width="full">
            {researchers.map((researcher, index) => (
              <ResearcherCard key={index} {...researcher} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Researchers 