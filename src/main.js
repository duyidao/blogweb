import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import 'virtual:svg-icons-register';
import '@/assets/style/style.less';

const app = createApp(App);
// 全局路由跳转函数封装
app.config.globalProperties.$goRouter = (path, front, type = 'push') => {
    router[type](front + path);
};

app.use(router);
app.mount('#app');
