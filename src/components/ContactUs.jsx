import { Box, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, useColorModeValue, Heading, Text, Select, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const researchers = [
    { name: 'Madelo B. Biando', role: 'Lead Researcher', email: 'biandomadelo847@gmail.com' },
    { name: 'Apple Mae R. Castor', role: 'Researcher', email: 'applemaecastor4@gmail.com' },
    { name: 'Apple Jewel S. Borais', role: 'Researcher', email: 'applejewelborais@gmail.com' },
    { name: 'Ruth Daphne Prila Pesimo', role: 'Research Adviser', email: '' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get selected researcher's details
    const selectedResearcher = researchers.find(r => r.name === formData.recipient)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent',
        description: `Your message has been sent to ${selectedResearcher.name} (${selectedResearcher.role}). We'll get back to you soon.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: '', email: '', recipient: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Box py={12} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack spacing={12}>
          {/* Header */}
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading 
              size="2xl" 
              mb={4}
              color={useColorModeValue('green.600', 'green.200')}
            >
              Contact Us
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
              Have questions about our research? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Text>
          </Box>

          {/* Contact Form */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            border="2px"
            borderColor={useColorModeValue('green.100', 'green.700')}
            maxW="3xl"
            mx="auto"
            w="100%"
          >
            <VStack spacing={6}>
              <Heading 
                size="lg" 
                color={useColorModeValue('green.600', 'green.200')}
              >
                Send us a Message
              </Heading>

              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <VStack spacing={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        bg={useColorModeValue('white', 'gray.700')}
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        _hover={{
                          borderColor: useColorModeValue('green.300', 'green.500')
                        }}
                        _focus={{
                          borderColor: useColorModeValue('green.400', 'green.400'),
                          boxShadow: `0 0 0 1px ${useColorModeValue('green.400', 'green.400')}`
                        }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        bg={useColorModeValue('white', 'gray.700')}
                        borderColor={useColorModeValue('green.200', 'green.600')}
                        _hover={{
                          borderColor: useColorModeValue('green.300', 'green.500')
                        }}
                        _focus={{
                          borderColor: useColorModeValue('green.400', 'green.400'),
                          boxShadow: `0 0 0 1px ${useColorModeValue('green.400', 'green.400')}`
                        }}
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel>Send To</FormLabel>
                    <Select
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleChange}
                      placeholder="Select researcher"
                      bg={useColorModeValue('white', 'gray.700')}
                      borderColor={useColorModeValue('green.200', 'green.600')}
                      _hover={{
                        borderColor: useColorModeValue('green.300', 'green.500')
                      }}
                      _focus={{
                        borderColor: useColorModeValue('green.400', 'green.400'),
                        boxShadow: `0 0 0 1px ${useColorModeValue('green.400', 'green.400')}`
                      }}
                    >
                      {researchers.map((researcher) => (
                        <option key={researcher.name} value={researcher.name}>
                          {researcher.name} - {researcher.role}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      bg={useColorModeValue('white', 'gray.700')}
                      borderColor={useColorModeValue('green.200', 'green.600')}
                      _hover={{
                        borderColor: useColorModeValue('green.300', 'green.500')
                      }}
                      _focus={{
                        borderColor: useColorModeValue('green.400', 'green.400'),
                        boxShadow: `0 0 0 1px ${useColorModeValue('green.400', 'green.400')}`
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      minH="150px"
                      bg={useColorModeValue('white', 'gray.700')}
                      borderColor={useColorModeValue('green.200', 'green.600')}
                      _hover={{
                        borderColor: useColorModeValue('green.300', 'green.500')
                      }}
                      _focus={{
                        borderColor: useColorModeValue('green.400', 'green.400'),
                        boxShadow: `0 0 0 1px ${useColorModeValue('green.400', 'green.400')}`
                      }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="green"
                    size="lg"
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg'
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default ContactUs 