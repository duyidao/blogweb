export const routeNow = ref({}); // 当前路由信息

export const loading = ref(false); // 加载中

// 路由导航栏按钮
export const routerBtnList = ref([
    {
      name: "刀刀博客效果",
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
      name: "项目需求效果",
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