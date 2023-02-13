import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vue-app/',
  // publicDir: process.env.NODE_ENV === 'production' ? 'vue-app' : '/',
})
