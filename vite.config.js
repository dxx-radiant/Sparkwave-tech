import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // "/" is correct for a custom domain (sparkwave-tech.com).
  // Only change this if you host at username.github.io/repo-name/ without a custom domain.
  base: '/',
})
