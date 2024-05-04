import { routeNow } from '@/store/router.js'

/**
 * @file router guards
 */
const beforeEachCallback = async (to, from, next) => {
    routeNow.value = {
        path: to.path, // 完整路径
        menuOrder: to.meta.menuOrder, // 菜单排序
        detailType: to.path.split('/')[to.path.split('/').length - 2], // 文章类型
        articleType: to.path.split('/')[to.path.split('/').length - 1], // 文章类型
        title: to.meta.title, // 标题
        info: to.meta.info, // 描述
        img: to.meta.img, // 图片
    };
    next();
};

export {beforeEachCallback};
