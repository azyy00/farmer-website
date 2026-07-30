import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Swiss Industrial type system: Archivo Black (macro headers), Archivo (body),
// JetBrains Mono (telemetry / metadata). Self-hosted and bundled by Vite.
import '@fontsource/archivo-black'
import '@fontsource-variable/archivo'
import '@fontsource-variable/jetbrains-mono'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
