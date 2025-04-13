import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, useColorModeValue, Icon, Flex, Image, Avatar, AvatarGroup } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { Link } from 'react-router-dom'
import { FaBook, FaChartBar, FaLightbulb } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import scroll1 from '../assets/scroll1.png'
import scroll3 from '../assets/scroll3.png'
import scroll4 from '../assets/scroll4.jpg'
import m1 from '../assets/members/m1.png'
import m2 from '../assets/members/m2.png'
import m3 from '../assets/members/m3.jpg'

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [scroll1, scroll3, scroll4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getImagePosition = (index) => {
    const diff = (index - currentImage + images.length) % images.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(images.length - 1)) return 'right';
    return 'left';
  };

  const getImageStyle = (position) => {
    switch (position) {
      case 'left':
        return {
          transform: 'translateX(-100%) scale(0.8)',
          opacity: 0.5,
          zIndex: 0
        };
      case 'center':
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          zIndex: 1
        };
      case 'right':
        return {
          transform: 'translateX(100%) scale(0.8)',
          opacity: 0.5,
          zIndex: 0
        };
      default:
        return {};
    }
  };

  // Colors and typography
  const primaryColor = useColorModeValue('green.600', 'green.200');
  const secondaryColor = useColorModeValue('gray.600', 'gray.300');
  const backgroundColor = useColorModeValue('white', 'gray.900');
  const headingFont = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
  const bodyFont = '"Roboto", sans-serif';

  return (
    <Box fontFamily={bodyFont} bg={backgroundColor} color={secondaryColor}>
      {/* Hero Section */}
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        bg={backgroundColor}
        pt={{ base: "60px", md: 0 }}
        px={4}
        animation={`${fadeIn} 1s ease-out`}
      >
        <Container maxW={'container.xl'}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            {/* Image Content - Moved before text content for mobile */}
            <Box
              position="relative"
              height={{ base: "250px", sm: "300px", md: "400px" }}
              width="100%"
              maxW={{ base: "100%", md: "50%" }}
              overflow="hidden"
              borderRadius="xl"
              boxShadow="xl"
              order={{ base: 1, md: 2 }}  // Order 1 puts it first on mobile, 2 on desktop
            >
              <Flex
                position="relative"
                width="100%"
                height="100%"
                alignItems="center"
                justifyContent="center"
              >
                {images.map((img, index) => (
                  <Box
                    key={index}
                    position="absolute"
                    width="100%"
                    height="100%"
                    transition="all 0.5s ease-in-out"
                    style={getImageStyle(getImagePosition(index))}
                  >
                    <Image
                      src={img}
                      alt={`Farmer illustration ${index + 1}`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </Box>
                ))}
              </Flex>
              <Flex
                position="absolute"
                bottom="4"
                left="50%"
                transform="translateX(-50%)"
                gap={2}
                zIndex="2"
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    w="2"
                    h="2"
                    borderRadius="full"
                    bg={currentImage === index ? useColorModeValue('green.600', 'green.200') : "gray.300"}
                    transition="background-color 0.3s ease"
                  />
                ))}
              </Flex>
            </Box>

            {/* Text Content */}
            <VStack 
              spacing={6} 
              align={{ base: 'center', md: 'start' }} 
              flex="1"
              order={{ base: 2, md: 1 }}  // Order 2 puts it second on mobile, 1 on desktop
            >
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                color={primaryColor}
                lineHeight="1.2"
                mb={4}
                textAlign={{ base: 'center', md: 'left' }}
                fontFamily={headingFont}
              >
                Communication Challenges in the Implementation of Agricultural Office in LGU Goa
              </Heading>
              <Flex 
                align="center"
                justify={{ base: 'center', md: 'flex-start' }}
                gap={2}
                width="100%"
              >
                <Text
                  fontSize="xl" 
                  color={secondaryColor}
                >
                  A research study by Madelo B. Biando, Apple Mae R. Castor, and Apple Jewel S. Borais
                </Text>
                <AvatarGroup size='sm' max={3} spacing='-1.5rem'>
                  <Avatar 
                    name="Madelo Biando"
                    src={m3}
                    borderWidth="2px"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                  <Avatar 
                    name="Apple Jewel Borais"
                    src={m1}
                    borderWidth="2px"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                  <Avatar 
                    name="Apple Mae Castor"
                    src={m2}
                    borderWidth="2px"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                </AvatarGroup>
              </Flex>
              <Text 
                fontSize="lg" 
                color={secondaryColor}
                fontStyle="italic"
                textAlign={{ base: 'center', md: 'left' }}
              >
                Under the guidance of Ruth Daphne Prila Pesimo (Adviser)
              </Text>
              <Text 
                fontSize="md" 
                color={secondaryColor}
                bg={useColorModeValue('green.100', 'green.800')}
                px={4}
                py={2}
                borderRadius="full"
              >
                Bachelor of Arts in Communication
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Content Sections */}
      <Box py={12} bg={backgroundColor}>
        <Container maxW={'container.xl'}>
          <VStack spacing={16}>
            {/* Abstract Section */}
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
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue(
                      '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                      '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                    )
                  }}
                  color={useColorModeValue('black', 'white')}
                >
                  The Local Agricultural Office (LAO) in Goa, Partido, Camarines Sur, has carried out several agricultural projects in the barangays of Matacla, Digdigon, and Hiwacloy to assist local farmers and raise agricultural output. Through an analysis of important elements like the difficulties faced during implementation, the communication tactics used by the LAO, and the programs' overall effects on the farming community, this study assessed the efficacy of these initiatives. 
                  Using semi-structured interviews with ten local registered farmers, the study used a qualitative research approach to obtain in-depth perspectives. Although the LAO used various communication techniques, such as face-to-face farmer encounters, community gatherings, and other outreach techniques, the results showed that several obstacles prevented these initiatives from being fully effective.
                </Text>
              </Box>
            </VStack>

            {/* Introduction Section */}
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading 
                  size="xl" 
                  mb={6} 
                  textAlign="center"
                  color={useColorModeValue('green.600', 'green.200')}
                >
                  Introduction
                </Heading>
                <Text 
                  fontSize="lg" 
                  lineHeight="tall" 
                  textAlign="justify"
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
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue(
                      '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                      '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                    )
                  }}
                  color={useColorModeValue('black', 'white')}
                >
                  The growth of the farming industry, especially in rural areas, greatly depends on the execution of local agricultural initiatives. The main objective of this study is to assess how well the Local Agricultural Office's 
                  programs serve farmers. The outreach program under consideration specifically offers several support channels for farmers who are enrolled with authorized cooperatives and the Registry System for the Basic Sectors in Agriculture (RSBSA).  
                  One of the important initiatives is a Loan with low interest (Pautang na may mababang interest), which is supported by the Development Bank of the Philippines and Land Bank and provides low-interest loans to cooperatives and farmers. 
                  Furthermore, the Department of Agriculture-Philippine Rice Research Institute (DA-PhilRice) distributes (Libreng Dekalidad na binhing palay), as part of the program. Additionally, Da-ati, DA-PhilRice, DA-PHilMech, and TESDA provide 
                  (Libreng training at mga babasahin), for farmers and their dependents. Additionally, through DA-PHilMech, local government entities, farmers' associations, and cooperatives receive (Libreng makinaryang pansaka). This outreach program 
                  is designed to address the needs of farmers and improve their productivity and livelihoods by offering financial aid, quality inputs, knowledge, and modern technology.
                </Text>
              </Box>

              {/* Objectives Section */}
              <Box>
                <Heading 
                  size="xl" 
                  mb={6}
                  color={useColorModeValue('green.600', 'green.200')}
                >
                  Objectives
                </Heading>
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
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue(
                      '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                      '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                    )
                  }}
                >
                  <VStack spacing={6} align="start" width="100%">
                    <Text textAlign="justify" fontSize="lg" lineHeight="1.8" color={useColorModeValue('black', 'white')}>
                      Generally, this study aims to explore the communication strategies, challenges, and implementation of outreach programs by the Local Agricultural Office.
                    </Text>
                    <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('black', 'white')}>
                      Specifically, this study aims to:
                    </Text>
                    <VStack spacing={4} align="start" pl={6}>
                      <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue('black', 'white')}>
                        1. Explore the communication strategies and tools employed by the Local Agricultural Office in the implementation of Agricultural Programs.
                      </Text>
                      <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue('black', 'white')}>
                        2. Explore the challenges encountered in implementing the outreach Programs.
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </Box>
            </VStack>

            {/* Keywords Section */}
            <VStack spacing={8} align="stretch">
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
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: useColorModeValue(
                    '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                    '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                  )
                }}
              >
                <Heading 
                  size="md" 
                  mb={4}
                  color={useColorModeValue('primary.600', 'primary.200')}
                  fontFamily={'heading'}
                >
                  Keywords
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {['Communication', 'Challenges', 'Implementation', 'Agricultural', 'Local Agricultural Office (LAO)', 'Goa'].map((keyword) => (
                    <Text
                      key={keyword}
                      px={3}
                      py={1}
                      bg={useColorModeValue('primary.50', 'primary.900')}
                      color={useColorModeValue('primary.600', 'primary.200')}
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
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue(
                      '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                      '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                    )
                  }}
                  transition="all 0.3s ease"
                  aria-label="Research Methodology"
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
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue(
                      '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                      '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                    )
                  }}
                  transition="all 0.3s ease"
                  aria-label="Results & Discussion"
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
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue(
                      '0 15px 25px -8px rgba(0, 0, 0, 0.2), 0 6px 10px -5px rgba(0, 0, 0, 0.1)',
                      '0 15px 25px -8px rgba(0, 0, 0, 0.6), 0 6px 10px -5px rgba(0, 0, 0, 0.4)'
                    )
                  }}
                  transition="all 0.3s ease"
                  aria-label="Conclusion & Recommendations"
                >
                  Conclusion & Recommendations
                </Button>
              </SimpleGrid>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home;