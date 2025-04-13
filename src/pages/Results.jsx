import { Box, Container, Heading, Text, VStack, useColorModeValue, Image, SimpleGrid, Card, CardBody, CardFooter, Button, Icon, Stack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { FaComments, FaUsers, FaFileAlt, FaMobileAlt, FaExclamationTriangle, FaUserClock, FaTablet, FaArrowRight } from 'react-icons/fa'
import { keyframes } from '@emotion/react'

// Import illustrations
import communicationIllustration from '../assets/communication-illustration.png'
import faceToFaceIllustration from '../assets/face-to-face-illustration.png'
import traditionalMethodIllustration from '../assets/traditional-method-illustration.png'
import printedMaterialIllustration from '../assets/printed-material-illustration.png'
import digitalMethodIllustration from '../assets/digital-method-illustration.png'
import c1Image from '../assets/cmethods/C1.png'
import c2Image from '../assets/cmethods/C2.png'
import c3Image from '../assets/cmethods/C3.png'
import c4Image from '../assets/cmethods/C4.png'
import c5Image from '../assets/cmethods/C5.png'
import c6Image from '../assets/cmethods/C6.png'
import c7Image from '../assets/cmethods/C7.png'
import c8Image from '../assets/cmethods/C8.png'
import c9Image from '../assets/cmethods/C9.png'
import c10Image from '../assets/cmethods/C10.png'
import c11Image from '../assets/cmethods/C11.png'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Results = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');

  // Add table data
  const tableData = [
    {
      method: "Traditional (Letters & Text Messages)",
      description: "Letters formalize information, text messages serves as follow-ups.",
      strengths: "Ensure official documentation and timely updates.",
      weaknesses: "Informal communication (e.g., word-of-mouth) can lead to misinformation.",
      theory: "Diffusion of Innovations Theory (Rogers)"
    },
    {
      method: "Face-to-Face & Group Announcements",
      description: "Information is shared through barangay meetings and official statements.",
      strengths: "Builds trust, and direct confirmation of eligibility for aid.",
      weaknesses: "Limited reach, requires physical presence.",
      theory: ""
    },
    {
      method: "Printed Materials",
      description: "A list of aid recipients are posted at the barangay hall.",
      strengths: "Farmers can verify eligibility independently.",
      weaknesses: "Requires farmers to visit the barangay hall physically.",
      theory: ""
    },
    {
      method: "Digital (Social Media & Group Chats)",
      description: "Facebook group chats help disseminate information quickly.",
      strengths: "Fast and convenient for those with internet access.",
      weaknesses: "Not accessible to all, especially older farmers.",
      theory: "Uses and Gratifications Theory (Blumber & Katz)"
    }
  ];

  const findings = [
    {
      title: "Traditional Communication Methods",
      content: (
        <VStack spacing={4}>
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            Conventional methods of communication, such as letters and text messages, are most commonly used. Letters are used to formalize information dissemination, while text messages serve for follow-ups. This dual approach ensures both formal documentation and immediate communication capabilities.
          </Text>
          <Box
            borderRadius="lg"
            overflow="hidden"
            width="100%"
          >
            <Image
              src={traditionalMethodIllustration}
              alt="Traditional communication method illustration showing LAO officer thanking farmers"
              w="100%"
              h="auto"
            />
            <Box 
              p={3} 
              bg={useColorModeValue('gray.50', 'gray.800')}
              borderTop="1px"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            >
              <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} textAlign="center">
                "Salamat sa saindong mga mungkahi! Susubukan namon ayuson an saaomong komunikasyon tanganing mas dakul an makinabang sa saaomong mga programa."
              </Text>
            </Box>
          </Box>
        </VStack>
      ),
      icon: FaComments,
      hasImage: true
    },
    {
      title: "Face-to-Face and Group Announcements",
      content: (
        <VStack spacing={4}>
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            Farmers primarily learn about available aid through barangay meetings, where local authorities make announcements and provide updates. These meetings serve as formal venues for discussing agricultural support programs and other community matters.
          </Text>
          <Box
            borderRadius="lg"
            overflow="hidden"
            width="100%"
          >
            <Image
              src={faceToFaceIllustration}
              alt="Face-to-face communication illustration showing LAO officer announcing to farmers"
              w="100%"
              h="auto"
            />
          </Box>
        </VStack>
      ),
      icon: FaUsers,
      hasImage: true
    },
    {
      title: "Use of Printed Materials",
      content: (
        <VStack spacing={4}>
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            Farmers actively verify their eligibility for programs by checking posted lists at the barangay hall. This proactive approach helps prevent miscommunications and missed opportunities related to aid distribution. The combination of printed materials and personal verification ensures transparency and accuracy.
          </Text>
          <Box
            borderRadius="lg"
            overflow="hidden"
            width="100%"
          >
            <Image
              src={printedMaterialIllustration}
              alt="Printed material communication illustration showing LAO officer and farmer discussing"
              w="100%"
              h="auto"
            />
            <Box 
              p={3} 
              bg={useColorModeValue('gray.50', 'gray.800')}
              borderTop="1px"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            >
              <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} textAlign="center">
                "Ipinapahiling kan opisyal kan LAO na nagpapaliwanag nin mga paagi nin komunikasyon: may mga nakapaskil na listahan, may nagtetext sa cellphone, asin may sarong sa barangay."
              </Text>
            </Box>
          </Box>
        </VStack>
      ),
      icon: FaFileAlt,
      hasImage: true
    },
    {
      title: "Digital Communication Platforms",
      content: (
        <VStack spacing={4}>
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            Social media platforms like Facebook and group chats are emerging as useful tools, particularly among those with access to these platforms. However, digital platforms are not universally accessible, especially for older farmers or those without regular internet access.
          </Text>
          <Box
            borderRadius="lg"
            overflow="hidden"
            width="100%"
          >
            <Image
              src={digitalMethodIllustration}
              alt="Digital communication method illustration showing LAO officer explaining communication methods"
              w="100%"
              h="auto"
            />
            <Box 
              p={3} 
              bg={useColorModeValue('gray.50', 'gray.800')}
              borderTop="1px"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            >
              <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} textAlign="center">
                "Ipinapakita an mas organisadong paagi kan komunikasyon: may opisyal na nag-oofirer kan malinaw na paliwanag sa pulong, may aktibong Facebook group, asin may hotline para sa mga tanong kan mga maggurang."
              </Text>
            </Box>
          </Box>
        </VStack>
      ),
      icon: FaMobileAlt,
      hasImage: true
    }
  ];

  const challenges = [
    {
      title: "Trust Issues and Misinformation",
      content: (
        <VStack spacing={4} align="start">
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            Participant 1 stated that relying on word-of-mouth communication frequently results in disinformation since things might become twisted or inflated along the way. This can lead to confusion among farmers, particularly when it comes to comprehending the exact types of agricultural supplies given. For example, some farmers may feel they are receiving inbred seeds when in fact hybrid seeds are being supplied. Such misunderstandings can have an impact on planting selections and overall agricultural productivity. Participant 1 emphasized the importance of better, more dependable communication mechanisms to guarantee farmers receive correct, unaltered information.
          </Text>
          <Box
            bg={useColorModeValue('green.50', 'green.900')}
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text
              fontSize="md"
              fontStyle="italic"
              color={useColorModeValue('gray.700', 'gray.300')}
              mb={2}
            >
              "Ta pagano ito bagang masabi ka sana itext mo sana si sarong tawo na mayo man ning kompletong na information tungkol duman sa pameeting or topic or seminars, oh eh anong information hali sa agency minsan sala baga ano arog kaito na ang paapod palan is maorient nanaman sa ano sa highbrid huna ninda kaibahan so inbrid oh di kaya mas maray ano itong surat."
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              ["Because it seems like you should have texted someone who has complete information about the meeting or topic or seminars, or what information comes from the agency. Sometimes, it's like this, that the purpose is to orient them again on what is in their hybrid minds, so in hybrid, or maybe this letter is better."]
            </Text>
          </Box>
        </VStack>
      ),
          icon: FaUsers
        },
        {
      title: "Time Management",
      content: (
        <VStack spacing={4} align="start">
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            According to one participant, farmers frequently struggle to balance farm work and outreach efforts. Many meetings and seminars are organized during peak agricultural seasons, such as planting or harvesting, when farmers are the busiest. This timing encourages farmers to prioritize their livelihood above potentially beneficial programs, even if they wish to participate. As a result, they overlook important information and tools that could help them improve their farming techniques.
          </Text>
          <Box
            bg={useColorModeValue('green.50', 'green.900')}
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text
              fontSize="md"
              fontStyle="italic"
              color={useColorModeValue('gray.700', 'gray.300')}
              mb={2}
            >
              "Kami sa Co-off busy kami dahil duman sa ano sa pag ano kang paroy tapos mayo kami ning ano ning maipadara saro lang ang nagatindir basta itong nagkakaano ang schedule tapos minsan ang kumunikasyon is syempre pinapadara baga iyan dae taman aram na maabot siya tulos minsan nagaabot sa aga di kulang na si ano halimbawa kami sa Co-off ohh ano na kung baga gahol na isay na ang itatao mi igde arog kayan yan ang kadalasan arog kaan."
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              [We at Co-off are busy because of the work, and we don't have enough to send. Only one person is managing everything, and when the schedule gets tight, sometimes communication is delayed. Of course, we send it, but sometimes it doesn't reach on time, and it arrives very early. For example, we at Co-off, oh, it's like we're in a hurry to send it, and that's usually how it goes.]
            </Text>
          </Box>
        </VStack>
      ),
          icon: FaUserClock
        },
        {
      title: "Digital Divide",
      content: (
        <VStack spacing={4} align="start">
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            While social media and group chats are used for communication, not all farmers are familiar with these platforms. Some rely on their children or others to access information on their behalf, limiting their direct engagement with digital outreach efforts. The digital divide among farmers is highlighted by this situation, especially the difference between those who feel comfortable utilizing technology and those who don't. This dependence indicates the need for more inclusive approaches that serve both conventional and tech-savvy farmers.
          </Text>
          <Box
            bg={useColorModeValue('green.50', 'green.900')}
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text
              fontSize="md"
              fontStyle="italic"
              color={useColorModeValue('gray.700', 'gray.300')}
              mb={2}
            >
              "Dae ako tatao mag gamit ning cellphone, so aki ko pig pahiling ko na lang."
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              [I won't know how to use a cell phone, so I just let my child show me.]
            </Text>
          </Box>
        </VStack>
      ),
          icon: FaTablet
    },
    {
      title: "Communication Barriers",
      content: (
        <VStack spacing={4} align="start">
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            According to Participant 1, many farmers rely on writing for official communication, but this method can be slow and sometimes ineffective. Farmers also highlighted that information relayed through word of mouth can be inaccurate or incomplete. The statement draws attention to the shortcomings of farmers' conventional means of communication. Despite being seen as official, written communication is frequently delayed and may not always be successful.
          </Text>
          <Box
            bg={useColorModeValue('green.50', 'green.900')}
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text
              fontSize="md"
              fontStyle="italic"
              color={useColorModeValue('gray.700', 'gray.300')}
              mb={2}
            >
              "Dapat pag nagdedeseminate kang information, dapat klaro... minsan kasi pag text lang, kulang ang impormasyon o minsan sala ang pagkaintindi."
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              [When disseminating information, it should be clear... sometimes, when it's just text, the information is lacking or the understanding is sometimes wrong.]
            </Text>
          </Box>
        </VStack>
      ),
      icon: FaComments
    },
    {
      title: "Overcrowding During Distribution",
      content: (
        <VStack spacing={4} align="start">
          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
            According to Participant 9, aid delivery can easily become disorganized, causing confusion among recipients and slowing the process. People may fail to comprehend where and when to claim their benefits, resulting in long lineups and overcrowding. This misconception can lead to some people missing out on aid entirely, particularly those who are underinformed or physically unable to compete for scarce resources. Effective planning and communication are critical to ensuring that aid is distributed properly and efficiently.
          </Text>
          <Box
            bg={useColorModeValue('green.50', 'green.900')}
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text
              fontSize="md"
              fontStyle="italic"
              color={useColorModeValue('gray.700', 'gray.300')}
              mb={2}
            >
              "Ano pagkuyan halimbawa nagkasarabay sabay ang mga nagkukua ning mga abono libre gulping tawo nadidipisilan kami ta syempre surusuan minsan mariribok, oo dae mo maaaraman kaya ang gibo ning DA pagmay libre, paaramayan kung isay ang maamay tas may lista duman nalang magsunod sa number."
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              [For example, when people simultaneously come to get free fertilizer, we struggle because, of course, everyone rushes in, and sometimes it gets chaotic. Yes, you wouldn't know because when the DA (Department of Agriculture) gives freebies, people inform each other about it. Whoever gets there first gets it, and there's a list where people just follow their number.]
            </Text>
          </Box>
        </VStack>
      ),
      icon: FaExclamationTriangle
    }
  ];

  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'}>
        <VStack spacing={12} animation={`${fadeIn} 1s ease-out`}>
          {/* Main Heading */}
          <Box width="100%" mb={8}>
            <VStack spacing={6}>
          <Heading size="xl" textAlign="center" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
            Results and Discussion
          </Heading>
              <Text fontSize="lg" textAlign="center" maxW="3xl" fontFamily={'body'} color={useColorModeValue('black', 'white')}>
            Analysis of communication strategies and challenges in agricultural program implementation
          </Text>
            </VStack>
          </Box>

          {/* Communication Strategies Table */}
          <Box width="100%" overflowX="auto" maxW="100vw" sx={{
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              height: '8px',
              borderRadius: '8px',
              backgroundColor: useColorModeValue('rgba(0, 0, 0, 0.05)', 'rgba(255, 255, 255, 0.05)')
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '8px',
              backgroundColor: useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)')
            }
          }}>
            <VStack align="start" spacing={4} mb={8} minW={{ base: "800px", lg: "100%" }}>
              <Heading size="md" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
                Table 1: Communication Strategies in Agricultural Programs
              </Heading>
              <Box 
                width="100%" 
                border="2px"
                borderColor={useColorModeValue('green.500', 'green.200')} 
                borderRadius="lg" 
                overflow="hidden"
              >
                <Table variant="simple" size="md" bg={useColorModeValue('white', 'gray.800')}>
                  <Thead bg={useColorModeValue('green.50', 'green.900')}>
                    <Tr>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Communication Method
                      </Th>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Description
                      </Th>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Strengths
                      </Th>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Weaknesses
                      </Th>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Supporting Theory
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tableData.map((row, index) => (
                      <Tr 
                        key={index} 
                        _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                        borderBottom="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                      >
                        <Td 
                          fontWeight="medium"
                          borderRight="1px"
                          borderColor={useColorModeValue('green.100', 'green.700')}
                          p={4}
                        >
                          {row.method}
                        </Td>
                        <Td 
                          borderRight="1px"
                          borderColor={useColorModeValue('green.100', 'green.700')}
                          p={4}
                        >
                          {row.description}
                        </Td>
                        <Td 
                          borderRight="1px"
                          borderColor={useColorModeValue('green.100', 'green.700')}
                          p={4}
                        >
                          {row.strengths}
                        </Td>
                        <Td 
                          borderRight="1px"
                          borderColor={useColorModeValue('green.100', 'green.700')}
                  p={4}
                        >
                          {row.weaknesses}
                        </Td>
                        <Td p={4}>
                          {row.theory}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </VStack>
          </Box>

          {/* Communication Methods Section */}
          <VStack width="100%" spacing={8}>
            <Heading size="lg" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
              Communication Methods
            </Heading>
            <VStack spacing={4} mb={6}>
              <Heading 
                size="md" 
                fontFamily={'heading'} 
                color={useColorModeValue('primary.600', 'primary.200')}
                textAlign="center"
              >
                Hagong sa Komunikasyon sa Pag-uma kan LGU Goa
              </Heading>
              <Text
                fontSize="md"
                color={useColorModeValue('gray.600', 'gray.400')}
                fontStyle="italic"
                textAlign="center"
              >
                Isinurat sa Bicol ninda: Apple Mae Castor, Apple Jewel Borais
              </Text>
              <Text
                fontSize="md"
                color={useColorModeValue('gray.600', 'gray.400')}
                fontStyle="italic"
                textAlign="center"
              >
                Konsepto ni: Madelo Biando
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} width="100%">
              {findings.map((finding, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  bg={useColorModeValue('white', 'gray.800')}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl'
                  }}
                  height="100%"
                >
                  <CardBody>
                    <VStack align="start" spacing={4}>
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg={useColorModeValue('primary.50', 'primary.900')}
                      >
                        <Icon
                      as={finding.icon} 
                          boxSize={6}
                      color={useColorModeValue('primary.600', 'primary.200')}
                        />
                      </Box>
                    <Heading size="md" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
                      {finding.title}
                    </Heading>
                      {finding.content}
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>

            {/* Communication Methods Illustration */}
            <Box
              width="100%"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
            >
              <VStack spacing={6}>
                <Text 
                  fontSize="lg" 
                  fontStyle="italic" 
                  color={useColorModeValue('gray.600', 'gray.400')}
                  textAlign="center"
                >
                  Sarong grupo nin mga para uma an nag-iistorya habang may opisyal kan LAO na namatmat.
                </Text>
                <SimpleGrid 
                  columns={{ base: 1, md: 2 }} 
                  spacing={6}
                  width="100%"
                >
                  <Box>
                    <Image
                      src={c1Image}
                      alt="Communication methods illustration 1"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c2Image}
                      alt="Communication methods illustration 2"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c3Image}
                      alt="Communication methods illustration 3"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c4Image}
                      alt="Communication methods illustration 4"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c5Image}
                      alt="Communication methods illustration 5"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c6Image}
                      alt="Communication methods illustration 6"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c7Image}
                      alt="Communication methods illustration 7"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c8Image}
                      alt="Communication methods illustration 8"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c9Image}
                      alt="Communication methods illustration 9"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Image
                      src={c10Image}
                      alt="Communication methods illustration 10"
                      borderRadius="lg"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                </SimpleGrid>

                {/* Centered Final Image */}
                <Box 
                  width={{ base: "100%", md: "70%" }}
                  mx="auto"
                  mt={8}
                  position="relative"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'scale(1.02)',
                  }}
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color={useColorModeValue('green.600', 'green.200')}
                    textAlign="center"
                    mb={4}
                  >
                     W A K A S 
                  </Text>
                  <Image
                    src={c11Image}
                    alt="Final communication methods illustration"
                    borderRadius="lg"
                    width="100%"
                    height="auto"
                    boxShadow="2xl"
                  />
                </Box>
              </VStack>
            </Box>
          </VStack>

          {/* Challenges Section */}
          <VStack width="100%" spacing={8}>
            <Heading size="lg" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
              Communication Challenges
            </Heading>
            <VStack spacing={6} width="100%">
              {challenges.map((challenge, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  bg={useColorModeValue('white', 'gray.800')}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                          transition="all 0.3s ease"
                          _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl'
                  }}
                  direction={{ base: 'column', md: 'row' }}
                  width="100%"
                          >
                            <Box 
                    p={6}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                    minW={{ base: '100%', md: '200px' }}
                  >
                    <Icon
                      as={challenge.icon}
                      boxSize={10}
                      color={useColorModeValue('green.600', 'green.200')}
                    />
                  </Box>
                  <Box flex="1">
                    <CardBody>
                      <VStack align="start" spacing={4}>
                        <Heading size="md" fontFamily={'heading'} color={useColorModeValue('green.600', 'green.200')}>
                          {challenge.title}
                          </Heading>
                        {typeof challenge.content === 'string' ? (
                          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
                            {challenge.content}
                          </Text>
                        ) : (
                          challenge.content
                        )}
                      </VStack>
                    </CardBody>
                        </Box>
                </Card>
                      ))}
                    </VStack>
          </VStack>

          {/* Challenges Table */}
          <Box width="100%" overflowX="auto" maxW="100vw" sx={{
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              height: '8px',
              borderRadius: '8px',
              backgroundColor: useColorModeValue('rgba(0, 0, 0, 0.05)', 'rgba(255, 255, 255, 0.05)')
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '8px',
              backgroundColor: useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)')
            }
          }}>
            <VStack align="start" spacing={4} mb={8} minW={{ base: "800px", lg: "100%" }}>
              <Heading size="md" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
                Table 2: Challenges in the Implementation of Outreach Programs
              </Heading>
              <Box 
                width="100%" 
                border="2px" 
                borderColor={useColorModeValue('green.500', 'green.200')} 
                borderRadius="lg" 
                overflow="hidden"
              >
                <Table variant="simple" size="md" bg={useColorModeValue('white', 'gray.800')}>
                  <Thead bg={useColorModeValue('green.50', 'green.900')}>
                    <Tr>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Challenges
                      </Th>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Description
                      </Th>
                      <Th 
                        color={useColorModeValue('green.700', 'green.200')}
                        borderBottom="2px"
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        textAlign="center"
                      >
                        Key Issues
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr 
                      borderBottom="1px"
                      borderColor={useColorModeValue('green.100', 'green.700')}
                      _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                    >
                      <Td 
                        fontWeight="medium"
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Trust Issues and Misinformation
                      </Td>
                      <Td 
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Farmers misunderstood information when shared through word of mouth, leading to confusion (e.g., mistaking hybrid seeds for inbred).
                      </Td>
                      <Td p={4}>
                        Distorted details, lack of clarity.
                      </Td>
                    </Tr>
                    <Tr 
                      borderBottom="1px"
                      borderColor={useColorModeValue('green.100', 'green.700')}
                      _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                    >
                      <Td 
                        fontWeight="medium"
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Time Management
                      </Td>
                      <Td 
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Farmers struggle to attend meetings due to conflicts with farm activities (planting/harvesting). Communication is delayed.
                      </Td>
                      <Td p={4}>
                        Scheduling conflicts, slow dissemination.
                      </Td>
                    </Tr>
                    <Tr 
                      borderBottom="1px"
                      borderColor={useColorModeValue('green.100', 'green.700')}
                      _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                    >
                      <Td 
                        fontWeight="medium"
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Low Engagement in Digital Platforms
                      </Td>
                      <Td 
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Some farmers are unfamiliar with digital tools and rely on family members to acquire information.
                      </Td>
                      <Td p={4}>
                        Digital divide, limited direct engagement.
                      </Td>
                    </Tr>
                    <Tr 
                      borderBottom="1px"
                      borderColor={useColorModeValue('green.100', 'green.700')}
                      _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                    >
                      <Td 
                        fontWeight="medium"
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Communication Barriers
                      </Td>
                      <Td 
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Text communications may be incomplete or misconstrued, while written notices are sluggish.
                      </Td>
                      <Td p={4}>
                        Incorrect or delayed information.
                      </Td>
                    </Tr>
                    <Tr 
                      _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                    >
                      <Td 
                        fontWeight="medium"
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Overcrowding During Distribution
                      </Td>
                      <Td 
                        borderRight="1px"
                        borderColor={useColorModeValue('green.100', 'green.700')}
                        p={4}
                      >
                        Poor planning leads to chaotic relief delivery, resulting in long lines and confusion.
                      </Td>
                      <Td p={4}>
                        Disorganization, unequal access.
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Results;