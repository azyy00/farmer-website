import { Box } from '@chakra-ui/react'
import Home from './Home'
import Methodology from './Methodology'
import Results from './Results'
import Conclusion from './Conclusion'
import Researchers from './Researchers'
import ContactUs from '../components/ContactUs'
import SectionRule from '../components/SectionRule'

// The whole study on one continuous scroll. Each former route is now an
// operational unit anchored by id, introduced by a numbered structural rule.
const Section = ({ id, children }) => (
  <Box as="section" id={id} sx={{ scrollMarginTop: '64px' }}>
    {children}
  </Box>
)

const OnePage = () => (
  <Box>
    <Section id="top">
      <Home />
    </Section>

    <Section id="methodology">
      <SectionRule index="02" label="Methodology" unit="UNIT / D-02 · QUALITATIVE" />
      <Methodology />
    </Section>

    <Section id="results">
      <SectionRule index="03" label="Results & Discussion" unit="UNIT / D-03 · FINDINGS" />
      <Results />
    </Section>

    <Section id="conclusion">
      <SectionRule index="04" label="Conclusion" unit="UNIT / D-04 · RECOMMENDATIONS" />
      <Conclusion />
    </Section>

    <Section id="researchers">
      <SectionRule index="05" label="Researchers" unit="UNIT / D-05 · PERSONNEL" />
      <Researchers />
    </Section>

    <Section id="contact">
      <SectionRule index="06" label="Contact" unit="UNIT / D-06 · TRANSMISSION" />
      <ContactUs />
    </Section>
  </Box>
)

export default OnePage
