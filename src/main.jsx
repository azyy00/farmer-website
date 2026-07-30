import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted variable fonts. Bundled with the app rather than fetched from a
// third-party CDN, so there is no render-blocking cross-origin request, no
// dependency on Google being reachable, and nothing leaked to another host.
import '@fontsource-variable/newsreader'
import '@fontsource-variable/outfit'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
