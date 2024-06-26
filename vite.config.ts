import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@appComponents': path.resolve(__dirname, './src/component'),
      '@appConfig': path.resolve(__dirname, './src/config'),
      '@appStore': path.resolve(__dirname, './src/store')
    }
  }
})
