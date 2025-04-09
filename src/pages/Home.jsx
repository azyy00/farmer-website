import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, useColorModeValue, Icon, Flex, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { Link } from 'react-router-dom'
import { FaBook, FaChartBar, FaLightbulb } from 'react-icons/fa'
import farmerImage from '../assets/7966603_3796236.jpg'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`

const Home = () => {
  const animation = `${fadeIn} 1s ease-out`
  const imageAnimation = `${slideIn} 1s ease-out`

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('green.50', 'green.900')}
        py={20}
        px={4}
        animation={animation}
      >
        <Container maxW={'container.xl'}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <VStack spacing={6} align={{ base: 'center', md: 'start' }} flex="1">
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                color={useColorModeValue('green.600', 'green.200')}
                lineHeight="1.2"
                mb={4}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Communication Challenges in the Implementation of Agricultural Office in LGU Goa
              </Heading>
              <Text 
                fontSize="xl" 
                color={useColorModeValue('gray.600', 'gray.300')} 
                maxW="2xl"
                mb={2}
                textAlign={{ base: 'center', md: 'left' }}
              >
                A research study by Madelo B. Biando, Apple Mae R. Castor, and Apple Jewel S. Borais
              </Text>
              <Text 
                fontSize="lg" 
                color={useColorModeValue('gray.600', 'gray.300')}
                fontStyle="italic"
                textAlign={{ base: 'center', md: 'left' }}
              >
                Under the guidance of Ruth Daphne Prila Pesimo (Adviser)
              </Text>
              <Text 
                fontSize="md" 
                color={useColorModeValue('gray.500', 'gray.400')}
                bg={useColorModeValue('green.100', 'green.800')}
                px={4}
                py={2}
                borderRadius="full"
              >
                Bachelor of Arts in Communication
              </Text>
            </VStack>

            <Box
              flex="1"
              animation={imageAnimation}
              display={{ base: 'none', md: 'block' }}
            >
              <Image
                src={farmerImage}
                alt="Farmers working together"
                borderRadius="xl"
                boxShadow="xl"
                maxW="600px"
                w="100%"
                h="auto"
                objectFit="cover"
                _hover={{
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Abstract Section */}
      <Container maxW={'container.xl'} py={12}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading 
              size="xl" 
              mb={6} 
              textAlign="center"
              color={useColorModeValue('green.600', 'green.200')}
            >
              Abstract
            </Heading>
            <Text 
              fontSize="lg" 
              lineHeight="tall" 
              textAlign="justify"
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s'
              }}
            >
              The Local Agricultural Office (LAO) in Goa, Partido, Camarines Sur, has carried out several agricultural projects in the barangays of Matacla, Digdigon, and Hiwacloy to assist local farmers and raise agricultural output. Through an analysis of important elements like the difficulties faced during implementation, the communication tactics used by the LAO, and the programs' overall effects on the farming community, this study assessed the efficacy of these initiatives.
            </Text>
            <Text 
              fontSize="lg" 
              mt={4} 
              lineHeight="tall" 
              textAlign="justify"
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s'
              }}
            >
              Using semi-structured interviews with ten local registered farmers, the study used a qualitative research approach to obtain in-depth perspectives. Although the LAO used various communication techniques, such as face-to-face farmer encounters, community gatherings, and other outreach techniques, the results showed that several obstacles prevented these initiatives from being fully effective.
            </Text>
          </Box>

          {/* Keywords */}
          <Box 
            bg={useColorModeValue('green.50', 'green.800')} 
            p={6} 
            borderRadius="lg"
            boxShadow="sm"
          >
            <Heading 
              size="md" 
              mb={4}
              color={useColorModeValue('green.600', 'green.200')}
            >
              Keywords
            </Heading>
            <Flex wrap="wrap" gap={2}>
              {['Communication', 'Challenges', 'Implementation', 'Agricultural', 'Local Agricultural Office (LAO)', 'Goa'].map((keyword) => (
                <Text
                  key={keyword}
                  px={3}
                  py={1}
                  bg={useColorModeValue('green.100', 'green.700')}
                  color={useColorModeValue('green.700', 'green.100')}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {keyword}
                </Text>
              ))}
            </Flex>
          </Box>

          {/* Quick Links */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
            <Button
              as={Link}
              to="/methodology"
              colorScheme="green"
              size="lg"
              height="100px"
              leftIcon={<Icon as={FaBook} boxSize={6} />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.2s"
            >
              Research Methodology
            </Button>
            <Button
              as={Link}
              to="/results"
              colorScheme="green"
              size="lg"
              height="100px"
              leftIcon={<Icon as={FaChartBar} boxSize={6} />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.2s"
            >
              Results & Discussion
            </Button>
            <Button
              as={Link}
              to="/conclusion"
              colorScheme="green"
              size="lg"
              height="100px"
              leftIcon={<Icon as={FaLightbulb} boxSize={6} />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.2s"
            >
              Conclusion & Recommendations
            </Button>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 