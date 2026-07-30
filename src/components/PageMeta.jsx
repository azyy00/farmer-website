import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Communication Challenges in Agricultural Programs - LGU Goa'

// Per-route document title and description. Keeping this in one place means
// search engines and shared links describe each page instead of the whole site.
const pageMeta = {
  '/': {
    title: 'Communication Challenges in Agricultural Programs - LGU Goa',
    description:
      'A qualitative study on the communication strategies and challenges of the Local Agricultural Office in Goa, Partido, Camarines Sur.',
  },
  '/methodology': {
    title: 'Methodology',
    description:
      'Qualitative research design, semi-structured interviews with ten registered farmers, and the data gathering procedure used in the study.',
  },
  '/results': {
    title: 'Results & Discussion',
    description:
      'Communication strategies used by the Local Agricultural Office and the challenges encountered in implementing outreach programs.',
  },
  '/conclusion': {
    title: 'Conclusion & Recommendations',
    description:
      'Key findings and recommendations for improving agricultural program communication in Goa, Camarines Sur.',
  },
  '/researchers': {
    title: 'Researchers',
    description:
      'The Bachelor of Arts in Communication researchers behind the study and their research adviser.',
  },
  '/about': {
    title: 'About the Study',
    description: 'Background and scope of this research on agricultural program communication.',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Get in touch with the researchers about this study.',
  },
}

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

const PageMeta = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] ?? {
      title: 'Page not found',
      description: SITE_NAME,
    }
    const title = pathname === '/' ? meta.title : `${meta.title} - ${SITE_NAME}`

    document.title = title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)

    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', window.location.origin + pathname)
  }, [pathname])

  return null
}

export default PageMeta
