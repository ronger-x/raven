import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const constantRouterMap = [];

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/dashboard',
          component: () => import('./views/Dashboard.vue'),
          meta: { title: '系统首页' }
        },{
          path: '/user',
          component: () => import('./views/About.vue'),
          meta: { title: '用户管理' }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '*', redirect: '/404'
    }
  ]
})
