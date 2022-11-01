
const homeRouter = [
  {
    path: '/',
    redirect: '/home'
  },
  {
  path: '/home',
  name: 'home',
  component: () => import('@/views/Home.vue')
}];

const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue')
};

// 所有定义过的路由都应该写入routers中
export const routers = [
  ...homeRouter,
  loginRouter
];
