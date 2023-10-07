import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        myaccount: resolve(__dirname, 'src/account/index.html'),
        quiz: resolve(__dirname, 'src/quiz/index.html')
      },
    },
  },
})
