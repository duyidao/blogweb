import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import postcsspxtorem from 'postcss-pxtorem';

// jsx支持
import vueJsx from '@vitejs/plugin-vue-jsx';

// 自动引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        // auto-import内置vue、vue-router、react这些常见基本库的引入规则
        "vue",
        "vue-router",
      ],
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    Components({
      dirs: [
        './src/components',
      ],
    })
  ],
  base: './',
  // base: '/blogweb/',
  publicPath: '/blogweb/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
