import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Researchers from './pages/Researchers'
import About from './pages/About'
import Methodology from './pages/Methodology'
import Results from './pages/Results'
import Conclusion from './pages/Conclusion'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box flex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/researchers" element={<Researchers />} />
              <Route path="/about" element={<About />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/results" element={<Results />} />
              <Route path="/conclusion" element={<Conclusion />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
