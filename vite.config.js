import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { ssr } from 'vite-plugin-ssr/plugin';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),ssr()],
  build: {
    ssrManifest: true,
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'), // 🔁 Adjust this
    },
    outDir: 'dist',
  },
})
