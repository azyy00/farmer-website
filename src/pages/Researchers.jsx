import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const ResearcherCard = ({ name, role, description }) => {
  return (
    <Box
      p={6}
      bg={useColorModeValue('background.light', 'background.dark')}
      boxShadow={useColorModeValue(
        '0 4px 8px -2px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)',
        '0 4px 8px -2px rgba(0, 0, 0, 0.45), 0 2px 6px -1px rgba(0, 0, 0, 0.3)'
      )}
      rounded={'lg'}
      textAlign={'center'}
      border="1px"
      borderColor={useColorModeValue('transparent', 'gray.700')}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: useColorModeValue(
          '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
          '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
        ),
        cursor: 'pointer'
      }}
      _active={{
        transform: 'translateY(-2px)',
        boxShadow: useColorModeValue(
          '0 8px 12px -4px rgba(0, 0, 0, 0.15), 0 4px 8px -3px rgba(0, 0, 0, 0.08)',
          '0 8px 12px -4px rgba(0, 0, 0, 0.5), 0 4px 8px -3px rgba(0, 0, 0, 0.3)'
        )
      }}
    >
      <VStack spacing={3}>
        <Heading 
          size="md" 
          fontFamily={'heading'} 
          color={useColorModeValue('primary.600', 'primary.200')}
          transition="transform 0.2s ease"
          _hover={{ transform: 'scale(1.05)' }}
        >
          {name}
        </Heading>
        <Text 
          color={useColorModeValue('black', 'white')} 
          fontWeight="bold" 
          fontFamily={'body'}
          fontSize="lg"
        >
          {role}
        </Text>
        <Text 
          color={useColorModeValue('black', 'white')} 
          fontFamily={'body'}
          lineHeight="1.8"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  )
}

const Researchers = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');
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
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading mb={4} fontFamily={'heading'} color={useColorModeValue('black', 'white')}>Research Team</Heading>
            <Text fontSize="xl" color={useColorModeValue('black', 'white')} fontFamily={'body'}>
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