import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import 'virtual:svg-icons-register';
import '@/assets/style/style.less';

const app = createApp(App);

app.use(router);
app.mount('#app');
