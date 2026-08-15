import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 相对 base，方便本地 file:// 预览与后期子路径部署
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { host: true, port: 5173 }
})
