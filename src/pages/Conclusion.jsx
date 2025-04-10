import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { FaLayerGroup, FaNetworkWired, FaMobileAlt } from 'react-icons/fa'
import { keyframes } from '@emotion/react'

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`

const Section = ({ title, content, isLeft }) => (
  <Box
    bg={useColorModeValue('background.light', 'background.dark')}
    p={6}
    borderRadius="lg"
    boxShadow={useColorModeValue(
      '0 4px 8px -2px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)',
      '0 4px 8px -2px rgba(0, 0, 0, 0.45), 0 2px 6px -1px rgba(0, 0, 0, 0.3)'
    )}
    border="2px"
    borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')}
    transition="all 0.3s ease"
    animation={`${isLeft ? slideInLeft : slideInRight} 0.8s ease-out`}
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
    <Heading 
      size="md" 
      mb={4} 
      color={useColorModeValue('primary.600', 'primary.200')} 
      fontFamily={'heading'}
      transition="color 0.2s ease"
      _hover={{ transform: 'scale(1.01)' }}
    >
      {title}
    </Heading>
    <Text 
      textAlign="justify" 
      fontSize="lg" 
      fontFamily={'body'} 
      color={useColorModeValue('black', 'white')}
      lineHeight="1.8"
    >
      {content}
    </Text>
  </Box>
)

const KeyTakeaway = ({ title, content, icon: Icon, index }) => (
  <Box
    bg={useColorModeValue('background.light', 'background.dark')}
    p={6}
    borderRadius="lg"
    textAlign="center"
    boxShadow={useColorModeValue(
      '0 4px 8px -2px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)',
      '0 4px 8px -2px rgba(0, 0, 0, 0.45), 0 2px 6px -1px rgba(0, 0, 0, 0.3)'
    )}
    border="2px"
    borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')}
    transition="all 0.3s ease"
    animation={`${fadeIn} ${0.5 + index * 0.2}s ease-out`}
    _hover={{
      transform: 'translateY(-5px)',
      boxShadow: useColorModeValue(
        '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
        '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
      )
    }}
  >
    <VStack spacing={4} align="center">
      <Box
        p={4}
        borderRadius="full"
        bg={useColorModeValue('primary.50', 'primary.900')}
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.2s ease"
        _hover={{ transform: 'scale(1.1)' }}
      >
        <Box
          as={Icon}
          fontSize="32px"
          color={useColorModeValue('primary.600', 'primary.200')}
        />
      </Box>
      <Heading 
        size="sm"
        fontFamily={'heading'}
        color={useColorModeValue('primary.600', 'primary.200')}
      >
        {title}
      </Heading>
      <Text 
        fontFamily={'body'}
        color={useColorModeValue('black', 'white')}
        lineHeight="1.8"
      >
        {content}
      </Text>
    </VStack>
  </Box>
)

const Conclusion = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');
  
  const keyTakeaways = [
    {
      title: "Communication Diversity",
      content: "Multiple communication channels are essential for reaching all farmers effectively",
      icon: FaLayerGroup
    },
    {
      title: "Infrastructure Needs",
      content: "Improved infrastructure is crucial for better program implementation",
      icon: FaNetworkWired
    },
    {
      title: "Digital Integration",
      content: "Gradual integration of digital tools while maintaining traditional methods",
      icon: FaMobileAlt
    }
  ];

  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12} animation={`${fadeIn} 1s ease-out`}>
          {/* Conclusion Section */}
          <Box width="full">
            <Heading size="xl" textAlign="center" mb={8} fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
              Conclusion and Recommendations
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Section
                title="Conclusion"
                content="Despite their diversity, the Local Agricultural Office's communication tactics work best in places that are easily accessible and where farmers are acclimated to more conventional means of contact. However, these programs' reach is limited in places with poor infrastructure, including isolated barangays. The personal involvement of local agricultural authorities and community leaders has been crucial in breaking down communication barriers, notwithstanding certain outreach difficulties. The effectiveness of communication campaigns is determined by the nature of the outreach tool and how well it aligns with the target audience's skills, such as literacy levels and technological access."
                isLeft={true}
              />
              
              <Section
                title="Recommendations"
                content="It is recommended that the Local Agricultural Office persist in employing a variety of communication techniques. More focus should be given to local newsletters and Facebook pages, as they have a larger audience, especially in rural areas. Giving farmers basic instructions on how to use mobile phones and online platforms for agricultural updates would help increase the efficacy of digital communication tools. Outreach initiatives would also be improved by ongoing training on digital communication strategies for agricultural officers. To improve communication infrastructure in rural locations, the Local Agricultural Office should invest more funds in things like better transportation for outreach workers and improved internet connectivity."
                isLeft={false}
              />
            </SimpleGrid>
          </Box>

          {/* Key Takeaways */}
          <Box width="full">
            <Heading size="lg" textAlign="center" mb={6} fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
              Key Takeaways
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {keyTakeaways.map((takeaway, index) => (
                <KeyTakeaway key={index} {...takeaway} index={index} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Conclusion 