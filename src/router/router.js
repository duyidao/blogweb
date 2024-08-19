export const generateRoutesFn = (pages, comps, typeName) => {
    // 页面数组路由级别排序
    const sortedArray = Object.entries(pages).filter(item => item[0].includes(typeName));

    const routes = [];
    /**
     * 添加路由
     *
     * @param path 路由路径
     * @param page 页面配置对象
     */
    function addRoute(path, page) {
        const compPath = path.replace('page.js', 'index.vue');
        path = path.replace(`../views/${typeName}/`, '').replace('/page.js', '');
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