import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/react-layouts-store/", // Название вашего репозитория
  plugins: [react()],
})
