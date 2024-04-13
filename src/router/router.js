export const generateRoutes = (pages, comps) => {
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
        path = '/blogweb/catalogue' + path.replace('../views', '').replace('/page.js', '');
        const name = path.split('/').filter(Boolean).join('-');
        const route = {
            path,
            name,
            component: comps[compPath],
            meta: page,
            children: [],
        };

        const parentRoute = routes.find(route => path.startsWith(route.path));
        if (parentRoute) {
            // 能找到父级路由，添加
            parentRoute.children.push(route);
        } else {
            // 不能找到父级路由，直接添加为一级路由
            routes.push(route);
        }
    }

    sortedArray.forEach(([path, page]) => {
        addRoute(path, page);
    });

    return routes;
}