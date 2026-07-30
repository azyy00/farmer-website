import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
  Heading,
  Text,
  Select,
  SimpleGrid,
  Link,
  Icon,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

// The adviser has no published address, so messages for her are routed through
// the lead researcher rather than silently going nowhere.
const LEAD_EMAIL = 'biandomadelo847@gmail.com'

const researchers = [
  { name: 'Madelo B. Biando', role: 'Lead Researcher', email: LEAD_EMAIL },
  { name: 'Apple Mae R. Castor', role: 'Researcher', email: 'applemaecastor4@gmail.com' },
  { name: 'Apple Jewel S. Borais', role: 'Researcher', email: 'applejewelborais@gmail.com' },
  { name: 'Ruth Daphne Prila Pesimo', role: 'Research Adviser', email: LEAD_EMAIL, viaLead: true },
]

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const toast = useToast()

  const pageBg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('green.100', 'green.700')
  const headingColor = useColorModeValue('green.600', 'green.200')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const fieldBg = useColorModeValue('white', 'gray.700')
  const fieldBorder = useColorModeValue('green.200', 'green.600')
  const fieldHoverBorder = useColorModeValue('green.300', 'green.500')

  const fieldStyles = {
    bg: fieldBg,
    borderColor: fieldBorder,
    _hover: { borderColor: fieldHoverBorder },
    _focus: { borderColor: 'green.400', boxShadow: '0 0 0 1px var(--chakra-colors-green-400)' },
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!formData.name.trim()) next.name = 'Please enter your name.'
    if (!formData.email.trim()) next.email = 'Please enter your email address.'
    else if (!isValidEmail(formData.email)) next.email = 'Please enter a valid email address.'
    if (!formData.recipient) next.recipient = 'Please choose who should receive this message.'
    if (!formData.subject.trim()) next.subject = 'Please enter a subject.'
    if (!formData.message.trim()) next.message = 'Please write your message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  // Previously this only showed a success toast and threw the message away.
  // Now it hands the composed message to the visitor's email client, which
  // needs no backend and actually reaches the researchers.
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const recipient = researchers.find((r) => r.name === formData.recipient)
    if (!recipient) return

    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `For: ${recipient.name} (${recipient.role})`,
      '',
      formData.message,
    ]

    const mailto =
      `mailto:${recipient.email}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto

    toast({
      title: 'Opening your email app',
      description: recipient.viaLead
        ? `Messages for ${recipient.name} are sent through the lead researcher. Send the draft to complete it.`
        : `Your message to ${recipient.name} is ready in your email app. Send it to complete delivery.`,
      status: 'info',
      duration: 8000,
      isClosable: true,
    })
  }

  return (
    <Box py={12} bg={pageBg}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack spacing={12}>
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading as="h1" size="2xl" mb={4} color={headingColor}>
              Contact Us
            </Heading>
            <Text fontSize="lg" color={mutedColor}>
              Have questions about our research? Send us a message and we&apos;ll respond as soon as
              possible.
            </Text>
          </Box>

          <Box
            bg={cardBg}
            p={{ base: 5, md: 8 }}
            borderRadius="xl"
            boxShadow="xl"
            border="2px"
            borderColor={cardBorder}
            maxW="3xl"
            mx="auto"
            w="100%"
          >
            <VStack spacing={6}>
              <Heading as="h2" size="lg" color={headingColor}>
                Send us a Message
              </Heading>

              <form onSubmit={handleSubmit} style={{ width: '100%' }} noValidate>
                <VStack spacing={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired isInvalid={!!errors.name}>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        {...fieldStyles}
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.email}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        autoComplete="email"
                        {...fieldStyles}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired isInvalid={!!errors.recipient}>
                    <FormLabel>Send To</FormLabel>
                    <Select
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleChange}
                      placeholder="Select researcher"
                      {...fieldStyles}
                    >
                      {researchers.map((researcher) => (
                        <option key={researcher.name} value={researcher.name}>
                          {researcher.name} - {researcher.role}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{errors.recipient}</FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.subject}>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      {...fieldStyles}
                    />
                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      minH="150px"
                      {...fieldStyles}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                    {!errors.message && (
                      <FormHelperText>
                        Submitting opens the message in your own email app so you can review and
                        send it.
                      </FormHelperText>
                    )}
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="green"
                    size="lg"
                    width="full"
                    leftIcon={<Icon as={FaEnvelope} />}
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </VStack>
          </Box>

          {/* Direct contact details, for visitors whose device has no mail app
              configured. */}
          <Box maxW="3xl" w="100%" mx="auto" textAlign="center">
            <Heading as="h2" size="md" mb={4} color={headingColor}>
              Or reach us directly
            </Heading>
            <VStack spacing={2}>
              <HStack color={mutedColor}>
                <Icon as={FaEnvelope} />
                <Link href={`mailto:${LEAD_EMAIL}`}>{LEAD_EMAIL}</Link>
              </HStack>
              <HStack color={mutedColor}>
                <Icon as={FaPhone} />
                <Link href="tel:+639109681266">0910 968 1266</Link>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default ContactUs
