import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sadmadlad/',
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         react: ['react', 'react-dom', 'react-router-dom'],
  //         fancy: ['framer-motion', 'react-markdown', 'rehype-raw', 'remark-gfm', 'gh-pages'],
  //         syntax: ['react-syntax-highlighter'],
  //       },
  //     },
  //   },
  // },
});
