import { routeNow } from '@/store/router.js'

/**
 * @file router guards
 */
const beforeEachCallback = async (to, from, next) => {
    routeNow.value = {
        path: to.path, // 完整路径
        menuOrder: to.meta.menuOrder, // 菜单排序
        rootRoute: to.path.split('/').slice(0, 3).join('/'), // 根路由
        articleType: to.path.split('/')[3], // 文章类型
        title: to.meta.title, // 标题
        info: to.meta.info, // 描述
    };
    next();
};

export {beforeEachCallback};
