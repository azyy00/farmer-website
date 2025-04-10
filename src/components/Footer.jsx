import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('background.light', 'background.dark')}
      color={useColorModeValue('secondary.600', 'secondary.300')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontFamily={'body'} fontSize={'sm'}>
          © 2024 Agricultural Office Research. All rights reserved
        </Text>
        <Stack direction={'row'} spacing={6} align="center">
          <Text fontFamily={'body'} fontSize={'sm'}>
            Bachelor of Arts in Communication
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 