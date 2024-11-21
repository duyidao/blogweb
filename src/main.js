import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import { createMetaManager} from 'vue-meta'
import 'virtual:svg-icons-register';

// 公共方法
import directives from './directives/index.js';
import customMethod from './utils/customMethod.js';
import './utils/preload.js';

// 样式与字体
import '@/assets/style/style.less';
import '@/assets/icon/iconfont.css';
import '@/assets/icon/iconfont.js';

import '@/views/article/index.js';

const app = createApp(App);

Object.entries(customMethod).forEach(([key, value]) => {
    app.config.globalProperties[key] = value;
})

app.use(router);  // 路由
app.use(directives); // 全局指令
app.use(createMetaManager(false, { // 全局meta
    meta: { tag: 'meta', nameless: true }
}));
app.mount('#app');
