import { keyframes } from '@emotion/react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Image, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Flex, IconButton } from '@chakra-ui/react';
import { FaClipboardList, FaUsers, FaTools, FaPenFancy, FaChartLine, FaCamera, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Import all data gathering images
import Dg1 from '../assets/datagathering-pictures/Dg1.png';
import Dg2 from '../assets/datagathering-pictures/Dg2.png';
import Dg3 from '../assets/datagathering-pictures/Dg3.png';
import Dg4 from '../assets/datagathering-pictures/Dg4.png';
import Dg5 from '../assets/datagathering-pictures/Dg5.png';
import Dg6 from '../assets/datagathering-pictures/Dg6.png';
import Dg7 from '../assets/datagathering-pictures/Dg7.png';
import Dg8 from '../assets/datagathering-pictures/Dg8.png';
import Dg9 from '../assets/datagathering-pictures/Dg9.png';
import D10 from '../assets/datagathering-pictures/D10.png';

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
    boxShadow={useColorModeValue(
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
    )}
    border="2px"
    borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')}
    animation={`${fadeIn} 0.5s ease-out`}
    transition="all 0.3s ease"
    _hover={{
      transform: 'translateY(-4px)',
      boxShadow: useColorModeValue(
        '0 12px 20px -6px rgba(0, 0, 0, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.08)',
        '0 12px 20px -6px rgba(0, 0, 0, 0.5), 0 4px 8px -4px rgba(0, 0, 0, 0.3)'
      ),
      cursor: 'pointer'
    }}
    _active={{
      transform: 'translateY(-2px)',
      boxShadow: useColorModeValue(
        '0 6px 10px -3px rgba(0, 0, 0, 0.12), 0 3px 6px -2px rgba(0, 0, 0, 0.07)',
        '0 6px 10px -3px rgba(0, 0, 0, 0.45), 0 3px 6px -2px rgba(0, 0, 0, 0.25)'
      )
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
      textAlign="justify" 
      fontFamily={'body'} 
      color={useColorModeValue('black', 'white')}
      lineHeight="1.7"
    >
      {content}
    </Text>
  </Box>
)

const DataGatheringCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Dg1, alt: "Data Gathering 1" },
    { src: Dg2, alt: "Data Gathering 2" },
    { src: Dg3, alt: "Data Gathering 3" },
    { src: Dg4, alt: "Data Gathering 4" },
    { src: Dg5, alt: "Data Gathering 5" },
    { src: Dg6, alt: "Data Gathering 6" },
    { src: Dg7, alt: "Data Gathering 7" },
    { src: Dg8, alt: "Data Gathering 8" },
    { src: Dg9, alt: "Data Gathering 9" },
    { src: D10, alt: "Data Gathering 10" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsPlaying(false); // Pause on touch
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      setIsPlaying(false);
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      setIsPlaying(false);
    } else if (e.key === ' ') {
      togglePlayPause();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const slideAnimation = keyframes`
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  `;

  return (
    <Box>
      <Box
        position="relative"
        height={{ base: "300px", md: "400px", lg: "500px" }}
        width="100%"
        overflow="hidden"
        borderRadius="xl"
        boxShadow="2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        role="region"
        aria-label="Image carousel"
      >
        {/* Navigation Arrows and Play/Pause */}
        <Flex
          position="absolute"
          width="100%"
          justify="space-between"
          align="center"
          height="100%"
          px={4}
          zIndex={2}
        >
          <IconButton
            aria-label="Previous slide"
            icon={<FaChevronLeft />}
            onClick={() => {
              prevSlide();
              setIsPlaying(false);
            }}
            variant="ghost"
            color="white"
            size="lg"
            _hover={{ bg: 'rgba(0,0,0,0.5)' }}
            _active={{ bg: 'rgba(0,0,0,0.7)' }}
          />
          <IconButton
            aria-label="Next slide"
            icon={<FaChevronRight />}
            onClick={() => {
              nextSlide();
              setIsPlaying(false);
            }}
            variant="ghost"
            color="white"
            size="lg"
            _hover={{ bg: 'rgba(0,0,0,0.5)' }}
            _active={{ bg: 'rgba(0,0,0,0.7)' }}
          />
        </Flex>

        {/* Play/Pause Button */}
        <IconButton
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={togglePlayPause}
          position="absolute"
          top={4}
          right={4}
          zIndex={2}
          variant="ghost"
          color="white"
          _hover={{ bg: 'rgba(0,0,0,0.5)' }}
          _active={{ bg: 'rgba(0,0,0,0.7)' }}
        />

        {/* Images */}
        <Box
          position="relative"
          height="100%"
          width="100%"
          onClick={() => {
            setSelectedImage(images[currentSlide]);
            onOpen();
            setIsPlaying(false);
          }}
          cursor="pointer"
        >
          <Image
            key={currentSlide}
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            objectFit="cover"
            w="100%"
            h="100%"
            animation={`${slideAnimation} 0.7s ease-out`}
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={4}
            background="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
            color="white"
          >
            <Text fontSize="lg" fontWeight="bold">
              {images[currentSlide].alt}
            </Text>
          </Box>
        </Box>

        {/* Progress Indicators */}
        <Flex
          position="absolute"
          bottom={4}
          width="100%"
          justify="center"
          gap={2}
          zIndex={2}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              w={index === currentSlide ? "8px" : "6px"}
              h={index === currentSlide ? "8px" : "6px"}
              borderRadius="full"
              bg={index === currentSlide ? "white" : "rgba(255,255,255,0.5)"}
              cursor="pointer"
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(false);
              }}
              transition="all 0.2s"
              _hover={{ transform: "scale(1.2)" }}
            />
          ))}
        </Flex>
      </Box>

      {/* Fullscreen Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton 
            color="white" 
            bg="rgba(0,0,0,0.2)"
            borderRadius="full"
            _hover={{
              bg: "rgba(0,0,0,0.3)"
            }}
          />
          <ModalBody 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            p={0}
          >
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                maxH="90vh"
                maxW="90vw"
                objectFit="contain"
                borderRadius="lg"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Methodology = () => {
  const sections = [
    {
      title: "Research Design",
      content: "This study used the qualitative method to investigate the effectiveness of communication strategies utilized by the Local Agriculture Office to improve agricultural outreach. The purpose is to learn about the perspectives, experiences, and insights of key stakeholders, notably rice farmers and agricultural office staff, regarding the communication techniques and strategies used.",
      icon: <FaClipboardList />
    },
    {
      title: "Participants",
      content: "The participants in this study were rice farmers from Goa in Partido, with a target sample size of ten (10), who had previously participated in or profited from outreach initiatives and were carefully selected to participate in the study. The sample included a variety of farms, both small and large-scale operations.",
      icon: <FaUsers />
    },
    {
      title: "Data Gathering Procedures",
      content: "Semi-structured, in-depth interviews with agriculture office personnel and rice farmers were performed to collect a variety of opinions and thoughts. The interviews focused on farmers' understanding, opinions, and experiences with the office's agricultural communication techniques. Discussions centered on the strategies' perceived utility, accessibility, and general effectiveness.",
      icon: <FaTools />
    },
    {
      title: "Data Gathering Instruments",
      content: "The researchers conducted semi-structured interviews with agricultural office workers as well as in-depth interviews with rice farmers. Interviews with farmers were done to learn more about their perspectives on communication tactics, the utility of various technologies, how well they suited their needs, the obstacles they faced, and suggestions for improvement.",
      icon: <FaPenFancy />
    },
    {
      title: "Data Analysis",
      content: "This study's qualitative data analysis used a systematic coding method. Initially, open coding was employed, with transcripts from in-depth interviews being rigorously analyzed to identify relevant subjects and categories. Following that, axial coding grouped these initial codes into bigger categories, resulting in links between different concepts.",
      icon: <FaChartLine />
    }
  ]

  const backgroundColor = useColorModeValue('white', 'gray.900');

  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')} animation={`${fadeIn} 0.5s ease-out`}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12}>
          {/* Methodology Section */}
          <VStack spacing={8}>
            <Heading size="xl" textAlign="center" mb={4} fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
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
              <FaCamera />
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
            
            <DataGatheringCarousel />
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Methodology 