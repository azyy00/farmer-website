import { Box, Button, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  const heading = useColorModeValue('green.600', 'green.200')
  const body = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box py={24} minH="60vh">
      <Container maxW="container.md">
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="3xl" color={heading}>
            404
          </Heading>
          <Heading as="h2" size="lg" color={heading}>
            Page not found
          </Heading>
          <Text fontSize="lg" color={body}>
            The page you are looking for does not exist or may have been moved.
          </Text>
          <Button as={Link} to="/" colorScheme="green" size="lg" leftIcon={<FaHome />}>
            Back to Home
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default NotFound
