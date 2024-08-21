export const routeNow = ref({}); // 当前路由信息

export const loading = ref(false); // 加载中

// 路由导航栏按钮
export const routerBtnList = ref([
    {
      name: "文章列表",
      icon: "icon-liebiao",
      children: [
        {
          name: "CSS",
          base: "/article/",
          path: "css",
          icon: "icon-css",
        },
        {
          name: "Javascript",
          base: "/article/",
          path: "js",
          icon: "icon-js",
        },
        {
          name: "Learn",
          base: "/article/",
          path: "learn",
          icon: "icon-xuexi",
        },
      ],
    },
    {
      name: "效果列表",
      icon: 'icon-yonghu',
      icon: "icon-xiaoguo",
      children: [
        {
          name: "EChart",
          base: "/effect/",
          path: "echart",
          icon: "icon-echart",
        },
      ],
    },
]);