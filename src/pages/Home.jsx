import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, useColorModeValue, Icon, Flex, Image, Avatar, AvatarGroup } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { Link } from 'react-router-dom'
import { PiArrowRight, PiBookOpenText, PiLightbulb } from 'react-icons/pi'
import fieldPoster from '../assets/field-farmer.webp'
import fieldFarmer from '../assets/field-farmer.webp'
import fieldPair from '../assets/field-pair.webp'
import fieldPlanting from '../assets/field-planting.webp'
import m1 from '../assets/members/m1.webp'
import m2 from '../assets/members/m2.webp'
import m3 from '../assets/members/m3.webp'

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

// The farmer photographs supplied for the study. Real documentary images of
// the community the research is about.
const fieldPhotos = [
  { src: fieldFarmer, alt: 'A farmer working a rice paddy at golden hour in Goa, Camarines Sur' },
  { src: fieldPair, alt: 'Two farmers inspecting a crop together in the field' },
  { src: fieldPlanting, alt: 'A farmer planting seed by hand along a tilled row' },
]

const Home = () => {
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
  const avatarRing = 'whiteAlpha.700';
  const badgeBg = useColorModeValue('green.100', 'green.800');
  const keywordBg = useColorModeValue('primary.50', 'primary.900');
  const keywordColor = useColorModeValue('primary.600', 'primary.200');
  const bandBg = useColorModeValue('gray.100', 'gray.800');
  const bandBorder = useColorModeValue('gray.200', 'whiteAlpha.100');

  return (
    <Box fontFamily="body" bg={backgroundColor} color={secondaryColor}>
      {/* Hero: the supplied aerial field video plays behind a dark scrim, with
          the title and call to action over it. Under reduced-motion the video
          is hidden and the poster photograph shows through instead. */}
      <Box
        as="section"
        minH={{ base: '88vh', md: '100dvh' }}
        display="flex"
        alignItems={{ base: 'flex-end', md: 'center' }}
        position="relative"
        overflow="hidden"
        px={4}
        pt={{ base: 24, md: 0 }}
        pb={{ base: 16, md: 0 }}
        bgImage={`url(${fieldPoster})`}
        bgSize="cover"
        bgPosition="center"
      >
        {/* Ambient video layer */}
        <Box
          as="video"
          src="/field-aerial.mp4"
          poster={fieldPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          position="absolute"
          inset={0}
          width="100%"
          height="100%"
          objectFit="cover"
          sx={{
            '@media (prefers-reduced-motion: reduce)': { display: 'none' },
          }}
        />
        {/* Scrim for text legibility (WCAG AA over the moving footage) */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, rgba(20,28,20,0.86), rgba(20,28,20,0.55) 55%, rgba(20,28,20,0.35))"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, rgba(16,24,16,0.8), transparent 45%)"
        />

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack
            spacing={6}
            align={{ base: 'center', md: 'start' }}
            maxW={{ md: '3xl' }}
            textAlign={{ base: 'center', md: 'left' }}
            animation={`${fadeIn} 1s ease-out`}
          >
            <Text
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="primary.100"
            >
              Qualitative research study
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '2rem', md: '2.6rem', lg: '3.2rem' }}
              lineHeight={1.08}
              letterSpacing="-0.03em"
              fontWeight="600"
              color="white"
              fontFamily="heading"
              sx={{ textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
            >
              Communication Challenges in the Implementation of Agricultural Office in LGU Goa
            </Heading>
            <Flex align="center" gap={3} wrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
              <AvatarGroup size="md" max={3} spacing="-0.75rem">
                <Avatar name="Madelo Biando" src={m3} borderWidth="2px" borderColor={avatarRing} />
                <Avatar name="Apple Jewel Borais" src={m1} borderWidth="2px" borderColor={avatarRing} />
                <Avatar name="Apple Mae Castor" src={m2} borderWidth="2px" borderColor={avatarRing} />
              </AvatarGroup>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.900" maxW="46ch">
                A research study by Madelo B. Biando, Apple Mae R. Castor, and Apple Jewel S. Borais
              </Text>
            </Flex>
            <Button
              as={Link}
              to="/results"
              size="lg"
              px={8}
              bg="white"
              color="primary.700"
              rightIcon={<Icon as={PiArrowRight} boxSize={5} />}
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg', bg: 'primary.50' }}
              _active={{ transform: 'translateY(0)' }}
            >
              Read the findings
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Field photographs supplied for the study, shown as a full-width band
          between the hero and the abstract. */}
      <Box as="section" bg={bandBg} borderY="1px solid" borderColor={bandBorder} py={{ base: 8, md: 12 }} px={4}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 4, md: 6 }}>
            {fieldPhotos.map((photo, i) => (
              <Box
                key={photo.src}
                overflow="hidden"
                borderRadius="xl"
                boxShadow={cardShadow}
                sx={{ aspectRatio: '4 / 3' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  transition="transform 0.5s ease"
                  _hover={{ transform: 'scale(1.04)' }}
                />
              </Box>
            ))}
          </SimpleGrid>
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