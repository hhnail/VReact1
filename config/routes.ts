export default [
  // 用户模块路由
  {
    path: '/user',
    layout: false,
    // 子路由
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  // 访问表格组件
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  // 测试路由
  {
    path: '/api',
    name: 'API',
    icon: 'smile',
    component: './Api',
  },
  {
    path: '/test',
    name: '测试请求后端',
    icon: 'smile',
    component: './Test',
  },
  // 根目录。访问欢迎页面
  {
    path: '/',
    // 重定向到欢迎页面
    redirect: '/welcome',
  },
  // 上述路由均未匹配到。访问404
  {
    component: './404',
  },
];
