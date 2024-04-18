import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import {generateRoutesFn} from './router.js';
import {beforeEachCallback} from './guards.js';

// 获取所有page.js文件配置
const pages = import.meta.glob('../views/**/page.js', {
    eager: true, // 只获取导出结果
    import: 'default', // 获取默认导出
})
const comps = import.meta.glob('../views/**/index.vue')
export const generateRoutes = generateRoutesFn(pages, comps)   // 生成路由

export const routes = [
    {
        path: '/blogweb',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        path: '/blogweb/articleList/:type',
        component: () => import('@/views/articleList/index.vue'),
        meta: {
            title: '列表',
        }
    },
    {
        path: '/blogweb/detail',
        name: 'detail',
        component: () => import('@/views/detail/index.vue'),
        children: [
            ...generateRoutes
        ]
    },
    {
        path: '/blogweb/404',
        name: 'NoPage404',
        component: () => import('@/views/404/index.vue'), // 404 页面组件
        hidden: true, // 可选，隐藏该路由
    },
    {
        path: '/:pathMatch(.*)', // 使用正则匹配任意路径
        redirect: '/blogweb/404', // 重定向到 404 页面
        hidden: true, // 可选，隐藏该路由
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 如果有 savedPosition，则滚动到该位置
        if (savedPosition) {
          return savedPosition;
        } else {
          // 否则，滚动到页面顶部
          return { top: 0 };
        }
    }
});

// 全局前置导航
router.beforeEach(beforeEachCallback);

export default router;
