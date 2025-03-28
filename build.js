import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default {
  outDir: 'docs',
  rollupOptions: {
    output: {
      /**
       * 根据模块ID生成自定义分块名称
       *
       * @param {string} id 模块ID
       * @returns {string|undefined} 如果模块属于node_modules，则返回'vender'，否则返回undefined
       */
      manualChunks (id) {
        if (id.includes('node_modules')) {
          // 正则匹配特定库，或者使用包名来分割
          return 'vender'
        }
      },
      // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
      sanitizeFileName(name) {
        const match = DRIVE_LETTER_REGEX.exec(name);
        const driveLetter = match ? match[0] : "";
        // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
        // Otherwise, avoid them because they can refer to NTFS alternate data streams.
        return (
          driveLetter +
          name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
        );
      },
    },
  },
};