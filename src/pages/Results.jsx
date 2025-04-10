import { Box, Container, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from '@chakra-ui/react'
import { FaComments, FaUsers, FaFileAlt, FaMobileAlt, FaExclamationTriangle, FaUserClock, FaTablet } from 'react-icons/fa'
import { keyframes } from '@emotion/react'

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`

const Results = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900');

  const findings = [
    {
      title: "Traditional Communication Methods",
      content: "Conventional methods of communication, such as letters and text messages, are most commonly used. Letters are used to formalize information dissemination, while text messages serve for follow-ups. This dual approach ensures both formal documentation and immediate communication capabilities.",
      icon: FaComments
    },
    {
      title: "Face-to-Face and Group Announcements",
      content: "Farmers primarily learn about available aid through barangay meetings, where local authorities make announcements and provide updates. These meetings serve as formal venues for discussing agricultural support programs and other community matters. Direct communication from officials ensures crucial information reaches farmers effectively.",
      icon: FaUsers
    },
    {
      title: "Use of Printed Materials",
      content: "Farmers actively verify their eligibility for programs by checking posted lists at the barangay hall. This proactive approach helps prevent miscommunications and missed opportunities related to aid distribution. The combination of printed materials and personal verification ensures transparency and accuracy.",
      icon: FaFileAlt
    },
    {
      title: "Digital Communication Platforms",
      content: "Social media platforms like Facebook and group chats are emerging as useful tools, particularly among those with access to these platforms. However, digital platforms are not universally accessible, especially for older farmers or those without regular internet access.",
      icon: FaMobileAlt
    },
    {
      title: "Communication Challenges",
      icon: FaExclamationTriangle,
      subfindings: [
        {
          subtitle: "Trust Issues and Misinformation",
          content: "Word-of-mouth communication often leads to misinformation as details can become distorted or exaggerated along the way. This can create confusion among farmers, particularly regarding understanding the exact types of agricultural supplies being provided.",
          icon: FaUsers
        },
        {
          subtitle: "Time Management",
          content: "Farmers struggle to balance farm work and outreach activities. Many meetings and seminars are scheduled during peak agricultural seasons when farmers are busiest, forcing them to choose between their livelihood and potentially beneficial programs.",
          icon: FaUserClock
        },
        {
          subtitle: "Digital Divide",
          content: "While social media and group chats are utilized, not all farmers are familiar with these platforms. Some rely on their children or others to access information, limiting their direct engagement with digital outreach efforts.",
          icon: FaTablet
        }
      ]
    }
  ]

  return (
    <Box py={12} bg={backgroundColor} color={useColorModeValue('black', 'white')}>
      <Container maxW={'container.xl'}>
        <VStack spacing={8} animation={`${fadeIn} 1s ease-out`}>
          <Heading size="xl" textAlign="center" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
            Results and Discussion
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl" mb={8} fontFamily={'body'} color={useColorModeValue('black', 'white')}>
            Analysis of communication strategies and challenges in agricultural program implementation
          </Text>

          <Accordion allowMultiple width="100%">
            {findings.map((finding, index) => (
              <AccordionItem 
                key={index}
                border="2px"
                borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')}
                borderRadius="md"
                mb={4}
                bg={useColorModeValue('background.light', 'background.dark')}
                transition="all 0.3s ease"
                animation={`${slideInRight} ${0.3 + index * 0.2}s ease-out`}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: useColorModeValue(
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
                  )
                }}
              >
                <AccordionButton 
                  p={4}
                  _hover={{ bg: 'transparent' }}
                  borderRadius="md"
                >
                  <Box flex="1" textAlign="left" display="flex" alignItems="center" gap={4}>
                    <Box 
                      as={finding.icon} 
                      color={useColorModeValue('primary.600', 'primary.200')}
                      fontSize="28px"
                      p={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      bg={useColorModeValue('primary.50', 'primary.900')}
                      transition="all 0.2s ease"
                      _groupHover={{ transform: 'scale(1.1)' }}
                    />
                    <Heading size="md" fontFamily={'heading'} color={useColorModeValue('primary.600', 'primary.200')}>
                      {finding.title}
                    </Heading>
                  </Box>
                  <AccordionIcon color={useColorModeValue('primary.600', 'primary.200')} />
                </AccordionButton>
                <AccordionPanel 
                  pb={4} 
                  pt={2}
                  px={6}
                  fontFamily={'body'}
                >
                  {finding.subfindings ? (
                    <VStack align="stretch" spacing={6}>
                      {finding.subfindings.map((subfinding, subIndex) => (
                        <Box 
                          key={subIndex}
                          p={4}
                          borderRadius="md"
                          border="2px"
                          borderColor={useColorModeValue('rgba(195, 226, 194, 0.5)', 'transparent')}
                          transition="all 0.3s ease"
                          animation={`${fadeIn} ${0.3 + subIndex * 0.2}s ease-out`}
                          _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: useColorModeValue(
                              '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                              '0 4px 6px -1px rgba(0, 0, 0, 0.4)'
                            )
                          }}
                        >
                          <Heading 
                            size="sm" 
                            mb={3} 
                            fontFamily={'heading'}
                            color={useColorModeValue('primary.600', 'primary.200')}
                            display="flex"
                            alignItems="center"
                            gap={3}
                          >
                            <Box 
                              as={subfinding.icon} 
                              fontSize="20px"
                              p={2}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="full"
                              bg={useColorModeValue('primary.50', 'primary.900')}
                              transition="all 0.2s ease"
                              _groupHover={{ transform: 'scale(1.1)' }}
                            />
                            {subfinding.subtitle}
                          </Heading>
                          <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
                            {subfinding.content}
                          </Text>
                        </Box>
                      ))}
                    </VStack>
                  ) : (
                    <Text color={useColorModeValue('black', 'white')} lineHeight="1.8">
                      {finding.content}
                    </Text>
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  )
}

export default Results