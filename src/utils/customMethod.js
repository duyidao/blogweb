import router from '@/router/index.js';

export default {
    // 全局路由跳转函数封装
    '$goRouter': (path, front, type = 'push') => {
        router[type](front + path);
    },
};