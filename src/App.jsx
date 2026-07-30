import { lazy, Suspense } from 'react'
import { ChakraProvider, ColorModeScript, Box, Link as ChakraLink } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageMeta from './components/PageMeta'
import BackToTop from './components/BackToTop'
import GrainOverlay from './components/GrainOverlay'
import PageSkeleton from './components/PageSkeleton'
import theme from './theme'

// The whole study is a single scrolling document now. The old per-route paths
// redirect to the matching anchor so existing links keep working.
const OnePage = lazy(() => import('./pages/OnePage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const AppShell = () => (
  <Box minH="100dvh" bg="paper.500" display="flex" flexDirection="column" margin={0} padding={0}>
    <ChakraLink
      href="#main-content"
      position="absolute"
      left="-9999px"
      top={2}
      zIndex="skipLink"
      bg="ink.500"
      color="paper.500"
      px={4}
      py={2}
      fontFamily="mono"
      textTransform="uppercase"
      fontWeight="bold"
      _focus={{ left: 2 }}
    >
      Skip to main content
    </ChakraLink>

    <Navbar />

    <Box as="main" id="main-content" pt="64px" flex="1">
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<OnePage />} />
          <Route path="/methodology" element={<Navigate to="/#methodology" replace />} />
          <Route path="/results" element={<Navigate to="/#results" replace />} />
          <Route path="/conclusion" element={<Navigate to="/#conclusion" replace />} />
          <Route path="/researchers" element={<Navigate to="/#researchers" replace />} />
          <Route path="/about" element={<Navigate to="/#top" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Box>

    <Footer />
    <BackToTop />
    <GrainOverlay />
  </Box>
)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <PageMeta />
        <AppShell />
      </Router>
    </ChakraProvider>
  )
}

export default App
