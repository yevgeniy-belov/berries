import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // logLevel: 'info',
  // clearScreen: false,
  server: {
    // hmr: { overlay: false },
  },
  build: {
    // cssCodeSplit: false,
  },
  // server: {
  //   watch: {
  //     ignored: './keep/data.json'
  //   }
  // },
  plugins: [vue()]
})
