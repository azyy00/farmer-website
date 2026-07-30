import { keyframes } from '@emotion/react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Flex } from '@chakra-ui/react';
import { PiClipboardText, PiUsersThree, PiWrench, PiPencilLine, PiChartLineUp, PiCamera } from 'react-icons/pi';
import { lazy, Suspense } from 'react';
const InfiniteGallery = lazy(() => import('../components/InfiniteGallery'));

// Import all data gathering images
import Dg1 from '../assets/datagathering-pictures/Dg1.webp';
import Dg2 from '../assets/datagathering-pictures/Dg2.webp';
import Dg3 from '../assets/datagathering-pictures/Dg3.webp';
import Dg4 from '../assets/datagathering-pictures/Dg4.webp';
import Dg5 from '../assets/datagathering-pictures/Dg5.webp';
import Dg6 from '../assets/datagathering-pictures/Dg6.webp';
import Dg7 from '../assets/datagathering-pictures/Dg7.webp';
import Dg8 from '../assets/datagathering-pictures/Dg8.webp';
import Dg9 from '../assets/datagathering-pictures/Dg9.webp';
import D10 from '../assets/datagathering-pictures/D10.webp';

// Keyframe animation for fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const MethodologySection = ({ title, content, icon }) => (
  <Box 
    bg={useColorModeValue('background.light', 'background.dark')} 
    p={6} 
    borderRadius="lg"
    boxShadow={useColorModeValue('sm', 'darkSm')}
    border="1px solid"
    borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
    animation={`${fadeIn} 0.5s ease-out`}
    transition="all 0.3s ease"
    _hover={{
      transform: 'translateY(-4px)',
      boxShadow: useColorModeValue('lg', 'darkLg'),
      cursor: 'pointer'
    }}
    _active={{
      transform: 'translateY(-2px)',
      boxShadow: useColorModeValue('md', 'darkMd')
    }}
    backdropFilter="blur(10px)"
  >
    <Heading 
      size="md" 
      mb={4} 
      display="flex" 
      alignItems="center" 
      color={useColorModeValue('primary.600', 'primary.200')} 
      fontFamily={'heading'}
      transition="color 0.2s ease"
    >
      <Box 
        as="span" 
        color={useColorModeValue('primary.600', 'primary.200')} 
        mr={2}
        transition="transform 0.2s ease"
        _groupHover={{ transform: 'scale(1.1)' }}
      >
        {icon}
      </Box>
      <Box as="span">{title}</Box>
    </Heading>
    <Text 
      textAlign="left" 
      fontFamily={'body'} 
      color={useColorModeValue('black', 'white')}
      lineHeight="1.7"
    >
      {content}
    </Text>
  </Box>
)

// Kept at module scope so it is not a new array on every render, which would
// otherwise make every callback below unstable.
const images = [Dg1, Dg2, Dg3, Dg4, Dg5, Dg6, Dg7, Dg8, Dg9, D10].map((src, i) => ({
  src,
  alt: `Photograph from the data gathering interviews (${i + 1} of 10)`,
}));

const Methodology = () => {
  const sections = [
    {
      title: "Research Design",
      content: "This study used the qualitative method to investigate the effectiveness of communication strategies utilized by the Local Agriculture Office to improve agricultural outreach. The purpose is to learn about the perspectives, experiences, and insights of key stakeholders, notably rice farmers and agricultural office staff, regarding the communication techniques and strategies used.",
      icon: <PiClipboardText />
    },
    {
      title: "Participants",
      content: "The participants in this study were rice farmers from Goa in Partido, with a target sample size of ten (10), who had previously participated in or profited from outreach initiatives and were carefully selected to participate in the study. The sample included a variety of farms, both small and large-scale operations.",
      icon: <PiUsersThree />
    },
    {
      title: "Data Gathering Procedures",
      content: "Semi-structured, in-depth interviews with agriculture office personnel and rice farmers were performed to collect a variety of opinions and thoughts. The interviews focused on farmers' understanding, opinions, and experiences with the office's agricultural communication techniques. Discussions centered on the strategies' perceived utility, accessibility, and general effectiveness.",
      icon: <PiWrench />
    },
    {
      title: "Data Gathering Instruments",
      content: "The researchers conducted semi-structured interviews with agricultural office workers as well as in-depth interviews with rice farmers. Interviews with farmers were done to learn more about their perspectives on communication tactics, the utility of various technologies, how well they suited their needs, the obstacles they faced, and suggestions for improvement.",
      icon: <PiPencilLine />
    },
    {
      title: "Data Analysis",
      content: "This study's qualitative data analysis used a systematic coding method. Initially, open coding was employed, with transcripts from in-depth interviews being rigorously analyzed to identify relevant subjects and categories. Following that, axial coding grouped these initial codes into bigger categories, resulting in links between different concepts.",
      icon: <PiChartLineUp />
    }
  ]

  const backgroundColor = useColorModeValue('white', 'gray.900');

  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')} animation={`${fadeIn} 0.5s ease-out`}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12}>
          {/* Methodology Section */}
          <VStack spacing={8}>
            <Heading as="h1" size="xl" textAlign="center" mb={4} fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
              Research Methodology
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="3xl" fontFamily={'body'} color={useColorModeValue('black', 'white')}>
              A comprehensive qualitative study examining communication strategies in agricultural outreach
            </Text>
            
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} width="full">
              {sections.map((section, index) => (
                <MethodologySection key={index} {...section} />
              ))}
            </SimpleGrid>
          </VStack>

          {/* Data Gathering Photos Section */}
          <VStack spacing={8} width="full">
            <Heading 
              size="xl" 
              textAlign="center" 
              fontFamily={'heading'} 
              color={useColorModeValue('primary.600', 'primary.200')}
              display="flex"
              alignItems="center"
              gap={3}
            >
              <PiCamera />
              Data Gathering Documentation
            </Heading>
            <Text 
              fontSize="lg" 
              textAlign="center" 
              maxW="3xl" 
              fontFamily={'body'} 
              color={useColorModeValue('black', 'white')}
              mb={6}
            >
              Visual documentation of our research process and interactions with the agricultural community
            </Text>
            
            {/* 3D infinite photo gallery (react-three-fiber). Brutalist-framed
                plate over an ink ground, with a mono operating hint. */}
            <Box
              data-infinite-gallery-frame
              width="100%"
              maxW="6xl"
              position="relative"
              border="2px solid"
              borderColor="ink.500"
              bg="ink.500"
              boxShadow="xl"
            >
              <Flex
                justify="space-between"
                align="center"
                px={3}
                py={2}
                bg="red.500"
                color="paper.500"
                fontFamily="mono"
                fontSize={{ base: '10px', md: '11px' }}
                fontWeight={700}
                letterSpacing="0.14em"
                textTransform="uppercase"
              >
                <Text>[ FIG.02 // DATA GATHERING // 10 PLATES ]</Text>
                <Text display={{ base: 'none', md: 'block' }}>WEBGL // R3F</Text>
              </Flex>
              <Suspense
                fallback={
                  <Flex
                    align="center"
                    justify="center"
                    height="min(70vh, 560px)"
                    fontFamily="mono"
                    fontSize="xs"
                    letterSpacing="0.16em"
                    textTransform="uppercase"
                    color="paper.500"
                  >
                    Loading gallery...
                  </Flex>
                }
              >
                <InfiniteGallery
                  images={images}
                  speed={1.1}
                  visibleCount={10}
                  className="dg-gallery"
                  style={{ height: 'min(70vh, 560px)', width: '100%' }}
                />
              </Suspense>
              <Text
                px={3}
                py={2}
                borderTop="2px solid"
                borderColor="red.500"
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="paper.500"
              >
                Drag or use arrow keys to navigate &middot; autoplay resumes after 3s idle
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Methodology 