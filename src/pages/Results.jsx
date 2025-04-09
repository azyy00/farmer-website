import { Box, Container, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from '@chakra-ui/react'

const Results = () => {
  const findings = [
    {
      title: "Traditional Communication Methods",
      content: "Conventional methods of communication, such as letters and text messages, are most commonly used. Letters are used to formalize information dissemination, while text messages serve for follow-ups. This dual approach ensures both formal documentation and immediate communication capabilities."
    },
    {
      title: "Face-to-Face and Group Announcements",
      content: "Farmers primarily learn about available aid through barangay meetings, where local authorities make announcements and provide updates. These meetings serve as formal venues for discussing agricultural support programs and other community matters. Direct communication from officials ensures crucial information reaches farmers effectively."
    },
    {
      title: "Use of Printed Materials",
      content: "Farmers actively verify their eligibility for programs by checking posted lists at the barangay hall. This proactive approach helps prevent miscommunications and missed opportunities related to aid distribution. The combination of printed materials and personal verification ensures transparency and accuracy."
    },
    {
      title: "Digital Communication Platforms",
      content: "Social media platforms like Facebook and group chats are emerging as useful tools, particularly among those with access to these platforms. However, digital platforms are not universally accessible, especially for older farmers or those without regular internet access."
    },
    {
      title: "Communication Challenges",
      subfindings: [
        {
          subtitle: "Trust Issues and Misinformation",
          content: "Word-of-mouth communication often leads to misinformation as details can become distorted or exaggerated along the way. This can create confusion among farmers, particularly regarding understanding the exact types of agricultural supplies being provided."
        },
        {
          subtitle: "Time Management",
          content: "Farmers struggle to balance farm work and outreach activities. Many meetings and seminars are scheduled during peak agricultural seasons when farmers are busiest, forcing them to choose between their livelihood and potentially beneficial programs."
        },
        {
          subtitle: "Digital Divide",
          content: "While social media and group chats are utilized, not all farmers are familiar with these platforms. Some rely on their children or others to access information, limiting their direct engagement with digital outreach efforts."
        }
      ]
    }
  ]

  return (
    <Box py={12}>
      <Container maxW={'container.xl'}>
        <VStack spacing={8}>
          <Heading size="xl" textAlign="center">Results and Discussion</Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl" mb={8}>
            Analysis of communication strategies and challenges in agricultural program implementation
          </Text>

          <Accordion allowMultiple width="100%">
            {findings.map((finding, index) => (
              <AccordionItem 
                key={index}
                border="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius="md"
                mb={4}
              >
                <AccordionButton 
                  p={4}
                  _hover={{ bg: useColorModeValue('green.50', 'green.900') }}
                >
                  <Box flex="1" textAlign="left">
                    <Heading size="md">{finding.title}</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {finding.subfindings ? (
                    <VStack align="stretch" spacing={4}>
                      {finding.subfindings.map((subfinding, subIndex) => (
                        <Box key={subIndex}>
                          <Heading size="sm" mb={2}>{subfinding.subtitle}</Heading>
                          <Text>{subfinding.content}</Text>
                        </Box>
                      ))}
                    </VStack>
                  ) : (
                    <Text>{finding.content}</Text>
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