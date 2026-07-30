import { Box, Container, Skeleton, SkeletonText, VStack, SimpleGrid } from '@chakra-ui/react'

// Shaped like the pages it stands in for, rather than a circular spinner that
// tells the reader nothing about what is arriving.
const PageSkeleton = () => (
  <Box py={{ base: 12, md: 20 }}>
    <Container maxW="container.xl">
      <VStack spacing={12} align="stretch">
        <VStack spacing={4} align="center">
          <Skeleton height="46px" width={{ base: '80%', md: '46%' }} borderRadius="md" />
          <Skeleton height="18px" width={{ base: '90%', md: '62%' }} borderRadius="sm" />
        </VStack>

        <Box>
          <Skeleton height="22px" width="240px" mb={5} borderRadius="sm" />
          <SkeletonText noOfLines={5} spacing={4} skeletonHeight="12px" maxW="prose" />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Skeleton height="180px" borderRadius="xl" />
          <Skeleton height="180px" borderRadius="xl" />
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
)

export default PageSkeleton
