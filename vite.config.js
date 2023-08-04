import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sadmadlad/',
  plugins: [react(), ViteYaml()],
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          fancy: ['framer-motion', 'react-markdown', 'rehype-raw', 'remark-gfm', 'gh-pages'],
          syntax: ['react-syntax-highlighter'],
        },
      },
    },
  },
});
