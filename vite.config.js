import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rugby/',  // ✅ ADDED - Replace 'rugby' with your actual subdirectory name
  server: {
    port: 5175,
    host: true,
  },
})