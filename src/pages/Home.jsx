import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, useColorModeValue, Icon, Flex, Image, Avatar, AvatarGroup } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { Link } from 'react-router-dom'
import { PiBookOpenText, PiLightbulb, PiArrowRight } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import scroll1 from '../assets/scroll1.webp'
import scroll3 from '../assets/scroll3.webp'
import scroll4 from '../assets/scroll4.webp'
import m1 from '../assets/members/m1.webp'
import m2 from '../assets/members/m2.webp'
import m3 from '../assets/members/m3.webp'

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

// Module scope keeps this a stable reference across renders.
const images = [scroll1, scroll3, scroll4];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

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

  // Colors and typography. Every colour-mode hook is resolved here so that none
  // of them end up inside a loop or conditional further down the tree, which
  // would break the rules of hooks.
  const primaryColor = useColorModeValue('green.600', 'green.200');
  const secondaryColor = useColorModeValue('gray.600', 'gray.300');
  const backgroundColor = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('background.light', 'background.dark');
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.100');
  const cardShadow = useColorModeValue('sm', 'darkSm');
  const cardHoverShadow = useColorModeValue('lg', 'darkLg');
  const cardText = useColorModeValue('black', 'white');
  const dotActiveColor = useColorModeValue('green.600', 'green.200');
  const avatarRing = useColorModeValue('white', 'gray.800');
  const badgeBg = useColorModeValue('green.100', 'green.800');
  const keywordBg = useColorModeValue('primary.50', 'primary.900');
  const keywordColor = useColorModeValue('primary.600', 'primary.200');

  return (
    <Box fontFamily="body" bg={backgroundColor} color={secondaryColor}>
      {/* Hero Section */}
      <Box
        minH={{ base: 'auto', md: '100dvh' }}
        display="flex"
        alignItems={{ base: 'flex-start', md: 'center' }}
        bg={backgroundColor}
        pt={{ base: 12, md: 20 }}
        pb={{ base: 14, md: 20 }}
        px={4}
        position="relative"
        overflow="hidden"
        animation={`${fadeIn} 1s ease-out`}
      >
        <Container maxW={'container.xl'}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={{ base: 10, md: 12, lg: 20 }}
          >
            {/* Image Content - Moved before text content for mobile */}
            <Box
              position="relative"
              height={{ base: "240px", sm: "300px", md: "440px" }}
              width="100%"
              flex={{ md: '5' }}
              maxW={{ base: "100%", md: "46%" }}
              overflow="hidden"
              borderRadius="2xl"
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
                    bg={currentImage === index ? dotActiveColor : 'gray.300'}
                    transition="background-color 0.3s ease"
                  />
                ))}
              </Flex>
            </Box>

            {/* Text Content */}
            <VStack
              spacing={6}
              align={{ base: 'center', md: 'start' }}
              flex={{ md: '7' }}
              order={{ base: 2, md: 1 }}  // Order 2 puts it second on mobile, 1 on desktop
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color={primaryColor}
                opacity={0.85}
              >
                Qualitative research study
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '1.9rem', md: '2.4rem', lg: '2.9rem' }}
                lineHeight={1.1}
                letterSpacing="-0.03em"
                fontWeight="600"
                color={primaryColor}
                mb={1}
                textAlign={{ base: 'center', md: 'left' }}
                fontFamily="heading"
              >
                Communication Challenges in the Implementation of Agricultural Office in LGU Goa
              </Heading>
              <Flex
                align="center"
                justify={{ base: 'center', md: 'flex-start' }}
                gap={4}
                width="100%"
                wrap="wrap"
              >
                {/* The avatars used to be squeezed into the leftover sliver of
                    the byline row; they now sit ahead of it at a readable size. */}
                <AvatarGroup size="md" max={3} spacing="-0.75rem">
                  <Avatar 
                    name="Madelo Biando"
                    src={m3}
                    borderWidth="2px"
                    borderColor={avatarRing}
                  />
                  <Avatar 
                    name="Apple Jewel Borais"
                    src={m1}
                    borderWidth="2px"
                    borderColor={avatarRing}
                  />
                  <Avatar 
                    name="Apple Mae Castor"
                    src={m2}
                    borderWidth="2px"
                    borderColor={avatarRing}
                  />
                </AvatarGroup>
                <Text fontSize="xl" color={secondaryColor} flex="1" minW="260px">
                  A research study by Madelo B. Biando, Apple Mae R. Castor, and Apple Jewel S. Borais
                </Text>
              </Flex>
              <Button
                as={Link}
                to="/results"
                colorScheme="green"
                size="lg"
                px={8}
                rightIcon={<Icon as={PiArrowRight} boxSize={5} />}
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              >
                Read the findings
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Study credits. These two lines used to sit inside the hero, which
          pushed it past the four-element cap; they belong directly beneath it. */}
      <Box bg={backgroundColor} px={4} pb={{ base: 4, md: 8 }}>
        <Container maxW="container.xl">
          <Flex
            align="center"
            gap={{ base: 3, md: 5 }}
            wrap="wrap"
            borderTop="1px solid"
            borderColor={cardBorder}
            pt={6}
          >
            <Text fontSize="md" color={secondaryColor} fontStyle="italic" lineHeight={1.6}>
              Under the guidance of Ruth Daphne Prila Pesimo, Adviser
            </Text>
            <Text
              fontSize="sm"
              color={primaryColor}
              bg={badgeBg}
              px={3}
              py={1}
              borderRadius="sm"
              fontWeight="500"
            >
              Bachelor of Arts in Communication
            </Text>
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
                  color={primaryColor}
                >
                  Abstract
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight="1.75"
                  textAlign="left"
                  maxW="prose"
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  boxShadow={cardShadow}
                  border="1px solid"
                  borderColor={cardBorder}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: cardHoverShadow
                  }}
                  color={cardText}
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
                  color={primaryColor}
                >
                  Introduction
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight="1.75"
                  textAlign="left"
                  maxW="prose"
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  boxShadow={cardShadow}
                  border="1px solid"
                  borderColor={cardBorder}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: cardHoverShadow
                  }}
                  color={cardText}
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
                  color={primaryColor}
                >
                  Objectives
                </Heading>
                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  boxShadow={cardShadow}
                  border="1px solid"
                  borderColor={cardBorder}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: cardHoverShadow
                  }}
                >
                  <VStack spacing={6} align="start" width="100%">
                    <Text textAlign="left" fontSize="lg" lineHeight="1.8" color={cardText}>
                      Generally, this study aims to explore the communication strategies, challenges, and implementation of outreach programs by the Local Agricultural Office.
                    </Text>
                    <Text fontWeight="bold" fontSize="lg" color={cardText}>
                      Specifically, this study aims to:
                    </Text>
                    <VStack spacing={4} align="start" pl={6}>
                      <Text fontSize="lg" lineHeight="1.8" color={cardText}>
                        1. Explore the communication strategies and tools employed by the Local Agricultural Office in the implementation of Agricultural Programs.
                      </Text>
                      <Text fontSize="lg" lineHeight="1.8" color={cardText}>
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
                bg={cardBg}
                p={6} 
                borderRadius="lg"
                boxShadow={cardShadow}
                border="1px solid"
                borderColor={cardBorder}
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: cardHoverShadow
                }}
              >
                <Heading 
                  size="md" 
                  mb={4}
                  color={keywordColor}
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
                      bg={keywordBg}
                      color={keywordColor}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {keyword}
                    </Text>
                  ))}
                </Flex>
              </Box>

              {/* Quick links. Previously three identical full-width towers;
                  now one lead action with two lighter secondary routes, so the
                  row has a hierarchy instead of three equal shouts. */}
              <Box mt={10} w="100%">
                <Button
                  as={Link}
                  to="/results"
                  colorScheme="green"
                  size="lg"
                  h="auto"
                  py={6}
                  px={7}
                  w="100%"
                  justifyContent="space-between"
                  rightIcon={<Icon as={PiArrowRight} boxSize={5} />}
                  borderRadius="xl"
                  textAlign="left"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                >
                  <Box>
                    <Text fontSize="lg" fontWeight="600" lineHeight="1.3">
                      Results and discussion
                    </Text>
                    <Text fontSize="sm" fontWeight="400" opacity={0.85} lineHeight="1.4">
                      Communication strategies and the barriers farmers described
                    </Text>
                  </Box>
                </Button>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mt={4}>
                  {[
                    { to: '/methodology', icon: PiBookOpenText, label: 'Methodology', hint: 'How the study was run' },
                    { to: '/conclusion', icon: PiLightbulb, label: 'Conclusion', hint: 'Findings and recommendations' },
                  ].map((link) => (
                    <Button
                      key={link.to}
                      as={Link}
                      to={link.to}
                      variant="outline"
                      colorScheme="green"
                      size="lg"
                      h="auto"
                      py={5}
                      px={5}
                      justifyContent="flex-start"
                      leftIcon={<Icon as={link.icon} boxSize={5} />}
                      borderRadius="lg"
                      textAlign="left"
                      _hover={{ transform: 'translateY(-2px)', bg: keywordBg }}
                    >
                      <Box>
                        <Text fontSize="md" fontWeight="600" lineHeight="1.3">
                          {link.label}
                        </Text>
                        <Text fontSize="xs" fontWeight="400" opacity={0.75} lineHeight="1.4">
                          {link.hint}
                        </Text>
                      </Box>
                    </Button>
                  ))}
                </SimpleGrid>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home;