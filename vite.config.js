import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://MDAQUILKHAN963.github.io/Personal-Portfolio/
// so the base path must match the repo name. For Vercel/Netlify or a custom
// domain, change this back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Personal-Portfolio/',
})
