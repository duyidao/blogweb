import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import {generateRoutes} from './router.js';
import {beforeEachCallback, afterEachCallback} from './guards.js';

// 获取所有page.js文件配置
const pages = import.meta.glob('../views/**/page.js', {
    eager: true, // 只获取导出结果
    import: 'default', // 获取默认导出
})
const comps = import.meta.glob('../views/**/index.vue')
export const routes = generateRoutes(pages, comps)   // 生成路由

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        ...routes
    ],
});

// 全局前置导航
router.beforeEach(beforeEachCallback);

// 全局后置
router.afterEach(afterEachCallback);

export default router;
