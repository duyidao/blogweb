export const routeNow = ref({}); // 当前路由信息

export const loading = ref(false); // 加载中

// 路由导航栏按钮
export const routerBtnList = ref([
    {
      name: "刀刀博客效果",
      title: '刀刀博客文档效果',
      icon: "icon-liebiao",
      children: [
        {
          name: "CSS",
          base: "/article/",
          path: "css",
          icon: "icon-css",
          subtitle: '样式效果实现，搭配源码食用；修改属性参数，查看最新效果',
        },
        {
          name: "Javascript",
          base: "/article/",
          path: "js",
          icon: "icon-js",
          subtitle: 'Web API 妙用多，灵活巧用效果现',
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