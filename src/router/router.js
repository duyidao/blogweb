export const generateRoutesFn = (pages, comps) => {
    // 页面数组路由级别排序
    const sortedArray = Object.entries(pages).sort((a, b) => a[1].menuOrder - b[1].menuOrder);

    const routes = [];
    /**
     * 添加路由
     *
     * @param path 路由路径
     * @param page 页面配置对象
     */
    function addRoute(path, page) {
        const compPath = path.replace('page.js', 'index.vue');
        path = path.replace('../views/', '').replace('/page.js', '');
        const name = path.split('/').filter(Boolean).join('-');
        const route = {
            path,
            name,
            component: comps[compPath],
            meta: page,
        };

        routes.push(route);
    }

    sortedArray.forEach(([path, page]) => {
        addRoute(path, page);
    });

    return routes;
}