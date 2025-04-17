import { Box, Container, Text, VStack, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'gray.400')}
      borderTop="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      py={3}
      mt="auto"
      width="100%"
    >
      <Container
        maxW={'6xl'}
        py={2}
      >
        <VStack spacing={1} align="center">
          <Text 
            fontFamily={'body'} 
            fontSize={'sm'} 
            textAlign="center"
            fontWeight="medium"
          >
            © 2024 Madelo B. Biando, Apple Mae R. Castor, Apple Jewel S. Borais
          </Text>
          <Text 
            fontFamily={'body'} 
            fontSize={'xs'} 
            textAlign="center"
            color={useColorModeValue('gray.500', 'gray.500')}
          >
            Bachelor of Arts in Communication • Partido State University
          </Text>
          <Text 
            fontFamily={'body'} 
            fontSize={'xs'} 
            textAlign="center"
            color={useColorModeValue('gray.500', 'gray.500')}
          >
            Website developed by Anthony B. Azuela
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer 