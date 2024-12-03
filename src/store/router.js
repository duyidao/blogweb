export const routeNow = ref({}); // 当前路由信息

export const loading = ref(false); // 加载中

// 路由导航栏按钮
export const routerBtnList = ref([
  {
    name: "效果实现",
    phoneName: '效果实现源码列表',
    children: [
      {
        name: "博客效果",
        base: "/article/",
        path: "css",
        icon: "icon-liebiao",
      },
      {
        name: "轮子Demo",
        base: "/effect/",
        path: "list",
        icon: "icon-demo",
      },
    ],
  },
  {
    name: "个人成果",
    phoneName: '个人学习成果列表',
    children: [
      {
        name: "在线项目",
        base: "/project",
        path: "",
        icon: "icon-online_project",
      },
    ],
  },
]);