import { lazy, Suspense } from 'react'
import { ChakraProvider, Box, Center, Spinner, useColorModeValue, Link as ChakraLink } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageMeta from './components/PageMeta'
import BackToTop from './components/BackToTop'
import theme from './theme'

// Each route is loaded on demand so a visitor landing on the home page does not
// download the image-heavy Methodology and Results pages up front.
const Home = lazy(() => import('./pages/Home'))
const Researchers = lazy(() => import('./pages/Researchers'))
const About = lazy(() => import('./pages/About'))
const Methodology = lazy(() => import('./pages/Methodology'))
const Results = lazy(() => import('./pages/Results'))
const Conclusion = lazy(() => import('./pages/Conclusion'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const NotFound = lazy(() => import('./pages/NotFound'))

const RouteFallback = () => (
  <Center minH="60vh">
    <Spinner size="xl" thickness="4px" speed="0.7s" color="primary.500" label="Loading page" />
  </Center>
)

const AppShell = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const skipLinkBg = useColorModeValue('primary.600', 'primary.200')
  const skipLinkColor = useColorModeValue('white', 'gray.900')

  return (
    <Box minH="100vh" bg={bg} display="flex" flexDirection="column" margin={0} padding={0}>
      <ChakraLink
        href="#main-content"
        position="absolute"
        left="-9999px"
        top={2}
        zIndex={2000}
        bg={skipLinkBg}
        color={skipLinkColor}
        px={4}
        py={2}
        borderRadius="md"
        fontWeight="bold"
        _focus={{ left: 2 }}
      >
        Skip to main content
      </ChakraLink>

      <Navbar />

      <Box as="main" id="main-content" pt="60px" flex="1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/researchers" element={<Researchers />} />
            <Route path="/about" element={<About />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/results" element={<Results />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Box>

      <Footer />
      <BackToTop />
    </Box>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <PageMeta />
        <AppShell />
      </Router>
    </ChakraProvider>
  )
}

export default App
