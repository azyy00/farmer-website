import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, Icon, Flex, Image, Avatar, AvatarGroup } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { PiArrowRight } from 'react-icons/pi'
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
  // Single Swiss-Industrial substrate: carbon ink on documentation paper.
  const primaryColor = 'ink.500';
  const secondaryColor = 'gray.700';
  const backgroundColor = 'paper.500';
  const cardBg = 'paper.500';
  const cardBorder = 'ink.500';
  const cardShadow = 'md';
  const cardText = 'ink.500';
  const avatarRing = 'paper.500';
  const badgeBg = 'gray.100';
  const keywordBg = 'ink.500';
  const keywordColor = 'paper.500';
  const bandBg = 'ink.500';

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
        {/* Ink scrim + 1-bit dither overlay so the footage reads as a degraded
            document plate rather than glossy video. */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, rgba(10,10,10,0.9), rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.35))"
        />
        <Box
          aria-hidden="true"
          position="absolute"
          inset={0}
          mixBlendMode="multiply"
          opacity={0.5}
          sx={{
            backgroundImage:
              'radial-gradient(rgba(10,10,10,0.9) 1px, transparent 1.4px)',
            backgroundSize: '4px 4px',
          }}
        />

        {/* Figure framing: hazard-red plate label + corner crosshairs */}
        <Text
          position="absolute"
          top={{ base: 20, md: 24 }}
          left={{ base: 4, md: 8 }}
          zIndex={2}
          fontFamily="mono"
          fontSize={{ base: '10px', md: '12px' }}
          fontWeight={700}
          letterSpacing="0.14em"
          color="paper.500"
          bg="red.500"
          px={2}
          py={1}
        >
          [ FIG.01 // FIELD SURVEY · GOA-CAM-SUR ]
        </Text>
        {['top left', 'top right', 'bottom left', 'bottom right'].map((pos) => {
          const [v, h] = pos.split(' ')
          return (
            <Text
              key={pos}
              aria-hidden="true"
              position="absolute"
              {...{ [v]: '10px', [h]: '10px' }}
              zIndex={2}
              color="paper.500"
              fontFamily="mono"
              fontSize="16px"
              lineHeight={1}
            >
              +
            </Text>
          )
        })}

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack
            spacing={6}
            align={{ base: 'center', md: 'start' }}
            maxW={{ md: '4xl' }}
            textAlign={{ base: 'center', md: 'left' }}
            animation={`${fadeIn} 1s ease-out`}
          >
            <Heading
              as="h1"
              size="3xl"
              color="paper.500"
              mt={{ base: 6, md: 10 }}
            >
              Communication Challenges in Agricultural Programs / LGU Goa
            </Heading>
            <Flex align="center" gap={3} wrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
              <AvatarGroup size="md" max={3} spacing="-0.5rem">
                <Avatar name="Madelo Biando" src={m3} borderWidth="2px" borderRadius="0" borderColor={avatarRing} />
                <Avatar name="Apple Jewel Borais" src={m1} borderWidth="2px" borderRadius="0" borderColor={avatarRing} />
                <Avatar name="Apple Mae Castor" src={m2} borderWidth="2px" borderRadius="0" borderColor={avatarRing} />
              </AvatarGroup>
              <Text fontFamily="mono" fontSize={{ base: 'xs', md: 'sm' }} letterSpacing="0.04em" color="paper.500" maxW="52ch">
                BIANDO, M.B. / CASTOR, A.M.R. / BORAIS, A.J.S.
              </Text>
            </Flex>
            <Button
              onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              px={8}
              bg="red.500"
              borderColor="paper.500"
              color="paper.500"
              rightIcon={<Icon as={PiArrowRight} boxSize={5} />}
              _hover={{ bg: 'paper.500', color: 'ink.500', borderColor: 'paper.500' }}
            >
              Read the findings
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Field survey plates. Hard-bordered, mono-captioned, dividing-line grid
          generated by a 2px ink parent behind 2px gaps. */}
      <Box as="section" bg={bandBg} py={0} px={0} borderBottom="2px solid" borderColor="ink.500">
        <SimpleGrid columns={{ base: 1, sm: 3 }} gap="2px" bg="ink.500">
          {fieldPhotos.map((photo, i) => (
            <Box key={photo.src} bg="paper.500" position="relative">
              <Box overflow="hidden" sx={{ aspectRatio: '4 / 3' }} borderBottom="2px solid" borderColor="ink.500">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  sx={{ filter: 'grayscale(1) contrast(1.08)' }}
                  transition="filter 0.3s"
                  _hover={{ sx: { filter: 'grayscale(0) contrast(1)' } }}
                />
              </Box>
              <Flex justify="space-between" px={3} py={2} fontFamily="mono" fontSize="10px" letterSpacing="0.12em" textTransform="uppercase" color="ink.500">
                <Text>PLATE 0{i + 1}</Text>
                <Text color="red.500">FIELD / GOA</Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
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
                    boxShadow: 'lg'
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
                    boxShadow: 'lg'
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
                    boxShadow: 'lg'
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
                  boxShadow: 'lg'
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

            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home;