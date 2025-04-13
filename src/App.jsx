import { ChakraProvider, Box, extendTheme, useColorModeValue } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Researchers from './pages/Researchers'
import About from './pages/About'
import Methodology from './pages/Methodology'
import Results from './pages/Results'
import Conclusion from './pages/Conclusion'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

// Define a custom theme to apply consistent styling across the app
const customTheme = extendTheme({
  fonts: {
    heading: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    body: '"Roboto", sans-serif',
  },
  colors: {
    primary: {
      600: '#38A169', // green.600
      200: '#68D391', // green.200
    },
    secondary: {
      600: '#718096', // gray.600
      300: '#A0AEC0', // gray.300
    },
    background: {
      light: '#FFFFFF',
      dark: '#1A202C',
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
          <Navbar />
          <Box pt={{ base: '60px', md: '80px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/researchers" element={<Researchers />} />
              <Route path="/about" element={<About />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/results" element={<Results />} />
              <Route path="/conclusion" element={<Conclusion />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
