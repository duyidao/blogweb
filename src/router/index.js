import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import {generateRoutes} from './router.js';
import {beforeEachCallback, afterEachCallback} from './guards.js';

// 获取所有page.js文件配置
const pages = import.meta.glob('../views/**/page.js', {
    eager: true, // 只获取导出结果
    import: 'default', // 获取默认导出
})
const comps = import.meta.glob('../views/**/index.vue')
const routers = generateRoutes(pages, comps)   // 生成路由

export const routes = [
    {
        path: '/blogweb',
        redirect: '/blogweb/home'
    },
    {
        path: '/blogweb/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        path: '/blogweb/catalogue',
        component: () => import('@/views/catalogue/index.vue'),
        children: [
            ...routers
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 全局前置导航
router.beforeEach(beforeEachCallback);

// 全局后置
router.afterEach(afterEachCallback);

export default router;
