import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        myaccount: resolve(__dirname, 'src/myaccount/index.html'),
        quiz: resolve(__dirname, 'src/quiz/index.html')
      },
    },
  },
})
