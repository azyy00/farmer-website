import { Box, Container, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('background.light', 'background.dark')}
      color={useColorModeValue('secondary.600', 'secondary.300')}
      borderTop="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container
        maxW={'6xl'}
        py={6}
      >
        <VStack spacing={3} align="center">
          <Text 
            fontFamily={'body'} 
            fontSize={'sm'} 
            textAlign="center"
            fontWeight="bold"
          >
            © 2024 Madelo B. Biando, Apple Mae R. Castor, Apple Jewel S. Borais. All rights reserved.
          </Text>
          <Text 
            fontFamily={'body'} 
            fontSize={'sm'} 
            textAlign="center"
          >
            Bachelor of Arts in Communication
          </Text>
          <Text 
            fontFamily={'body'} 
            fontSize={'sm'} 
            textAlign="center"
          >
            Partido State University
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer 