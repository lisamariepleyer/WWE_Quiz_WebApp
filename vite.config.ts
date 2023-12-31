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
        main: resolve(__dirname, './index.html'),
        quiz: resolve(__dirname, './src/quiz/index.html'),
        account: resolve(__dirname, './src/account/index.html')
      },
    },
  },
  base: '/WWE_Quiz_WebApp/'
})
