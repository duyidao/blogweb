import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import postcsspxtorem from 'postcss-pxtorem';

// 自动引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // auto-import内置vue、vue-router、react这些常见基本库的引入规则
        "vue",
        "vue-router",
      ]
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
      ]
    })
  ],
  base: '/blogweb/',
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcsspxtorem({
  //         rootValue: 100, // ui设计稿宽度 / 10
  //         unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
  //         propList: ['*'], // 需要转换的属性列表，*表示全部（如果设置width，则width的值会被转换）
  //         selectorBlackList: ['ignore'], // 指定不需要转换的类
  //         replace: true, // 是否直接更换属性值，而不添加备用属性
  //         mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
  //         minPixelValue: 0, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  //         exclude: /node_modules/i // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  //       })
  //     ]
  //   }
  // },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
