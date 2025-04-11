import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Image, Collapse, IconButton, Flex } from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react'
import { keyframes } from '@emotion/react'
import m1 from '../assets/members/M4.png'
import m2 from '../assets/members/m2.png'
import m3 from '../assets/members/m3.jpg'

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideInUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`

const ContactInfo = ({ icon: Icon, label, value }) => (
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

  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={useColorModeValue('background.light', 'background.dark')}
      boxShadow={useColorModeValue(
        '0 4px 8px -2px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)',
        '0 4px 8px -2px rgba(0, 0, 0, 0.45), 0 2px 6px -1px rgba(0, 0, 0, 0.3)'
      )}
      rounded={'xl'}
      textAlign={'center'}
      border="2px"
      borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')}
      transition="all 0.3s ease"
      animation={`${slideInUp} ${0.5 + index * 0.2}s ease-out`}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: useColorModeValue(
          '0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 10px 15px -5px rgba(0, 0, 0, 0.1)',
          '0 20px 30px -10px rgba(0, 0, 0, 0.6), 0 10px 15px -5px rgba(0, 0, 0, 0.4)'
        ),
      }}
      position="relative"
      overflow="hidden"
      width="100%"
    >
      {image && (
        <Box
          mb={6}
          position="relative"
          width={{ base: "150px", sm: "180px" }}
          height={{ base: "150px", sm: "180px" }}
          mx="auto"
          borderRadius="full"
          overflow="hidden"
          boxShadow={useColorModeValue(
            '0 8px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -4px rgba(0, 0, 0, 0.06)',
            '0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -4px rgba(0, 0, 0, 0.3)'
          )}
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
      <VStack spacing={{ base: 3, md: 4 }}>
        <Heading 
          size={{ base: "md", sm: "lg" }}
          fontFamily={'heading'} 
          color={useColorModeValue('green.600', 'green.200')}
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        >
          {name}
        </Heading>
        <Text 
          color={useColorModeValue('black', 'white')} 
          fontWeight="bold" 
          fontFamily={'body'}
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          bg={useColorModeValue('green.50', 'green.900')}
          px={4}
          py={2}
          borderRadius="full"
          transition="all 0.3s ease"
          _groupHover={{
            bg: useColorModeValue('green.100', 'green.800'),
            transform: 'scale(1.05)'
          }}
        >
          {role}
        </Text>
        <Text 
          color={useColorModeValue('gray.600', 'gray.300')} 
          fontFamily={'body'}
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          px={{ base: 2, md: 4 }}
        >
          {description}
        </Text>
        
        {contacts && (
          <>
            <IconButton
              aria-label="Show contacts"
              icon={showContacts ? <FaChevronUp /> : <FaChevronDown />}
              onClick={() => setShowContacts(!showContacts)}
              variant="ghost"
              color={useColorModeValue('primary.600', 'primary.200')}
              _hover={{
                bg: useColorModeValue('primary.50', 'primary.900'),
                transform: 'scale(1.1)'
              }}
              transition="all 0.2s"
            />
            <Collapse in={showContacts}>
              <VStack 
                spacing={3} 
                pt={2} 
                align="start"
                bg={useColorModeValue('green.50', 'green.900')}
                p={4}
                borderRadius="lg"
                width="100%"
              >
                <ContactInfo icon={FaEnvelope} value={contacts.email} />
                <ContactInfo icon={FaPhone} value={contacts.phone} />
                <ContactInfo icon={FaMapMarkerAlt} value={contacts.address} />
              </VStack>
            </Collapse>
          </>
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
    image: null
  };

  return (
    <Box py={{ base: 8, md: 12 }} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'} px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 10, md: 16 }} animation={`${fadeIn} 1s ease-out`}>
          <Box textAlign="center">
            <Heading 
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