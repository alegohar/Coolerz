import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@Pages': Path.resolve(__dirname, '../Pages')
    }
  },
  plugins: [react()],
})
