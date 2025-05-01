import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/prueba': {
      target: 'https://api.cloudinary.com/v1_1/journal-app-react-david/upload',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/prueba/, ''),
    },
  },
})
