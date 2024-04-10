import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url';

// 自动引入
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // auto-import内置vue、vue-router、react这些常见基本库的引入规则
        "vue"
      ]
    })
    // Components({
    //   dirs: [
    //     './src/components',
    //   ]
    // })
  ],
  base: '/blogweb/',
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
