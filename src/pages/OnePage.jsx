import { Box } from '@chakra-ui/react'
import Home from './Home'
import Methodology from './Methodology'
import Results from './Results'
import Conclusion from './Conclusion'
import Researchers from './Researchers'
import ContactUs from '../components/ContactUs'
import SectionRule from '../components/SectionRule'
import Reveal from '../components/Reveal'

// The whole study on one continuous scroll. Each former route is now an
// operational unit anchored by id, introduced by a numbered structural rule and
// revealed by GSAP as it enters the viewport.
const Section = ({ id, index, label, unit, children }) => (
  <Box as="section" id={id} sx={{ scrollMarginTop: '64px' }}>
    <Reveal>
      <SectionRule index={index} label={label} unit={unit} />
    </Reveal>
    <Reveal y={56}>{children}</Reveal>
  </Box>
)

const OnePage = () => (
  <Box>
    <Box as="section" id="top">
      <Home />
    </Box>

    <Section id="methodology" index="02" label="Methodology" unit="UNIT / D-02 · QUALITATIVE">
      <Methodology />
    </Section>

    <Section id="results" index="03" label="Results & Discussion" unit="UNIT / D-03 · FINDINGS">
      <Results />
    </Section>

    <Section id="conclusion" index="04" label="Conclusion" unit="UNIT / D-04 · RECOMMENDATIONS">
      <Conclusion />
    </Section>

    <Section id="researchers" index="05" label="Researchers" unit="UNIT / D-05 · PERSONNEL">
      <Researchers />
    </Section>

    <Section id="contact" index="06" label="Contact" unit="UNIT / D-06 · TRANSMISSION">
      <ContactUs />
    </Section>
  </Box>
)

export default OnePage
