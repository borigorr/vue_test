import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: [
      {
        find: 'app',
        replacement: path.resolve(__dirname, './src/app')
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, './src/pages')
      },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, './src/widgets')
      },
      {
        find: 'entities',
        replacement: path.resolve(__dirname, './src/entities')
      },
      {
        find: 'features',
        replacement: path.resolve(__dirname, './src/features')
      },
    ]
  }
})
