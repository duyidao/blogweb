import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import 'virtual:svg-icons-register';
import '@/assets/style/style.less';
import directives from './directives/index.js';
import customMethod from './utils/customMethod.js';

const app = createApp(App);

Object.entries(customMethod).forEach(([key, value]) => {
    app.config.globalProperties[key] = value;
})

app.use(router);
app.use(directives);
app.mount('#app');
