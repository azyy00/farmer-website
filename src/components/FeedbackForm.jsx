import { Box, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, useColorModeValue, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Feedback Submitted',
        description: "Thank you for your valuable feedback!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: '', email: '', feedback: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      borderRadius="xl"
      boxShadow="xl"
      border="2px"
      borderColor={useColorModeValue('green.100', 'green.700')}
      maxW="600px"
      mx="auto"
      w="100%"
    >
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading 
            size="lg" 
            mb={2}
            color={useColorModeValue('green.600', 'green.200')}
          >
            Research Feedback
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            We value your thoughts on our research. Please share your feedback with us.
          </Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
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

            <FormControl isRequired>
              <FormLabel>Feedback</FormLabel>
              <Textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Share your thoughts about our research..."
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
              loadingText="Submitting..."
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
            >
              Submit Feedback
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  )
}

export default FeedbackForm 