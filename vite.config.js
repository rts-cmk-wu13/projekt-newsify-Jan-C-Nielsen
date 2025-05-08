import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: './', 
  build: {
    outDir: `docs`,
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        settings: resolve(__dirname, 'settings/index.html'),
        home: resolve(__dirname, 'home/index.html'),
        star: resolve(__dirname, 'star/index.html'),
      },
    },
  },
})