import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true
  },
  clearScreen: false,
  server: {
    port: 3000,
    strictPort: true,
  }
})
