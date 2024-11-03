import router from '@/router/index.js';

export default {
  // 全局路由跳转函数封装
  '$goRouter': (path = '', front = '', type = 'push') => {
    router[type](front + path);
  },
  extractCSSValue: (cssProperty) => {
    // 使用正则表达式匹配冒号后面的部分
    const regex = /(?<=:\s)(.*?)(?=;|$)/; // 匹配冒号后的部分，直到遇到分号或字符串结束
    const match = cssProperty.match(regex);
    // 如果找到匹配项，则返回第一个捕获组的内容，即冒号后面的值
    return match ? match[1].trim() : '';
  },
};