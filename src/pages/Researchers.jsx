import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Image, Collapse, IconButton, Flex } from '@chakra-ui/react'
import { PiEnvelopeSimple, PiPhone, PiMapPin, PiCaretDown, PiCaretUp } from 'react-icons/pi'
import { useState } from 'react'
import { keyframes } from '@emotion/react'
import m1 from '../assets/members/M4.webp'
import m2 from '../assets/members/m2.webp'
import m3 from '../assets/members/m3.webp'
import Ad from '../assets/members/Ads.webp'

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideInUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`

const ContactInfo = ({ icon: Icon, value }) => (
  <Flex 
    align="center" 
    gap={3} 
    fontSize="sm"
    color={useColorModeValue('gray.600', 'gray.300')}
    _hover={{
      color: useColorModeValue('primary.600', 'primary.200'),
      transform: 'translateX(2px)'
    }}
    transition="all 0.2s"
  >
    <Icon />
    <Text>{value}</Text>
  </Flex>
);

const ResearcherCard = ({ name, role, description, image, contacts, index }) => {
  const [showContacts, setShowContacts] = useState(false);
  // Hoisted so none of these hooks sit inside the conditional `image &&` /
  // `contacts &&` branches below.
  const cardColor1 = useColorModeValue('background.light', 'background.dark');
  const cardColor2 = useColorModeValue('sm', 'darkSm');
  const cardColor3 = useColorModeValue('gray.200', 'whiteAlpha.100');
  const cardColor4 = useColorModeValue('xl', 'darkXl');
  const cardColor5 = useColorModeValue('md', 'darkMd');
  const cardColor6 = useColorModeValue('green.600', 'green.200');
  const cardColor7 = useColorModeValue('black', 'white');
  const cardColor8 = useColorModeValue('green.50', 'green.900');
  const cardColor9 = useColorModeValue('green.100', 'green.800');
  const cardColor10 = useColorModeValue('gray.600', 'gray.300');
  const cardColor11 = useColorModeValue('primary.600', 'primary.200');
  const cardColor12 = useColorModeValue('primary.50', 'primary.900');

  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={cardColor1}
      boxShadow={cardColor2}
      rounded={'xl'}
      textAlign={'center'}
      border="1px solid"
      borderColor={cardColor3}
      transition="all 0.3s ease"
      animation={`${slideInUp} ${0.5 + index * 0.2}s ease-out`}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: cardColor4,
      }}
      position="relative"
      overflow="hidden"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {image && (
        <Box
          mb={6}
          position="relative"
          width={{ base: "150px", sm: "180px" }}
          height={{ base: "150px", sm: "180px" }}
          mx="auto"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow={cardColor5}
          transition="all 0.3s ease"
          _groupHover={{
            transform: 'scale(1.05)',
          }}
        >
          <Image
            src={image}
            alt={name}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.3s ease"
            _groupHover={{
              transform: 'scale(1.1)'
            }}
          />
        </Box>
      )}
      <VStack spacing={{ base: 3, md: 4 }} flex="1" width="100%">
        <Heading 
          size={{ base: "md", sm: "lg" }}
          fontFamily={'heading'} 
          color={cardColor6}
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        >
          {name}
        </Heading>
        <Text
          color={cardColor7}
          fontFamily="body"
          bg={cardColor8}
          px={3}
          py={1}
          borderRadius="sm"
          fontSize="xs"
          fontWeight="600"
          letterSpacing="0.08em"
          textTransform="uppercase"
          transition="all 0.3s ease"
          _groupHover={{ bg: cardColor9 }}
        >
          {role}
        </Text>
        <Text 
          color={cardColor10} 
          fontFamily={'body'}
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          px={{ base: 2, md: 4 }}
        >
          {description}
        </Text>
        
        {contacts && (
          <Box mt="auto" pt={2} width="100%">
            <IconButton
              aria-label={showContacts ? 'Hide contact details' : 'Show contact details'}
              icon={showContacts ? <PiCaretUp /> : <PiCaretDown />}
              onClick={() => setShowContacts(!showContacts)}
              variant="ghost"
              color={cardColor11}
              _hover={{
                bg: cardColor12,
                transform: 'scale(1.1)'
              }}
              transition="all 0.2s"
            />
            <Collapse in={showContacts}>
              <VStack 
                spacing={3} 
                pt={2} 
                align="start"
                bg={cardColor8}
                p={4}
                borderRadius="lg"
                width="100%"
              >
                <ContactInfo icon={PiEnvelopeSimple} value={contacts.email} />
                <ContactInfo icon={PiPhone} value={contacts.phone} />
                <ContactInfo icon={PiMapPin} value={contacts.address} />
              </VStack>
            </Collapse>
          </Box>
        )}
      </VStack>
    </Box>
  )
}

const Researchers = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');
  const researchTeam = [
    {
      name: 'Madelo B. Biando',
      role: 'Lead Researcher',
      description: 'Focused on communication frameworks and implementation strategies.',
      image: m3,
      contacts: {
        email: 'biandomadelo847@gmail.com',
        phone: '09109681266',
        address: 'Kilantaao, Sagñay, Camarines Sur'
      }
    },
    {
      name: 'Apple Mae R. Castor',
      role: 'Researcher',
      description: 'Specialized in data collection and analysis methodologies.',
      image: m2,
      contacts: {
        email: 'applemaecastor4@gmail.com',
        phone: '09307509784',
        address: 'Balaton Lagonoy Camarines Sur'
      }
    },
    {
      name: 'Apple Jewel S. Borais',
      role: 'Researcher',
      description: 'Expert in agricultural communication systems and local governance.',
      image: m1,
      contacts: {
        email: 'applejewelborais@gmail.com',
        phone: '09938412597',
        address: 'Balaton Lagonoy Camarines Sur'
      }
    }
  ];

  const adviser = {
    name: 'Ruth Daphne Prila Pesimo',
    role: 'Research Adviser',
    description: 'Providing guidance and expertise in research methodology and communication studies.',
    image: Ad,
    contacts: {
      phone: '09388792731',
      address: 'San Jose St., Goa, Camarines Sur'
    }
  };

  return (
    <Box py={{ base: 8, md: 12 }} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'} px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 10, md: 16 }} animation={`${fadeIn} 1s ease-out`}>
          <Box textAlign="center">
            <Heading
              as="h1"
              mb={{ base: 3, md: 4 }}
              fontFamily={'heading'} 
              color={useColorModeValue('green.600', 'green.200')}
              size={{ base: "xl", md: "2xl" }}
            >
              Research Team
            </Heading>
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue('gray.600', 'gray.300')} 
              fontFamily={'body'}
              maxW="2xl"
              mx="auto"
              lineHeight="1.8"
              px={{ base: 4, md: 0 }}
            >
              Meet the dedicated researchers behind this study
            </Text>
          </Box>
          
          {/* Research Team Section */}
          <Box width="full">
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={{ base: 6, md: 8, lg: 10 }} 
              width="full"
            >
              {researchTeam.map((researcher, index) => (
                <ResearcherCard key={index} {...researcher} index={index} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Adviser Section */}
          <Box width="full" maxW="2xl" mx="auto">
            <ResearcherCard {...adviser} index={3} />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Researchers 