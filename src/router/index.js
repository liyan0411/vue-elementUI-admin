import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
         {
           path: '/',
           name: '默认',
           component: () => import('@/views/login/index'),
           hidden: true
         },
         {
           path: '/login',
           name: '登录',
           component: () => import('@/views/login/index'),
           meta: { title: '登录', icon: 'dashboard' }
         },
         {
           path: '*',
           component: () => import('@/views/error-page/404'),
           hidden: true
         },
         {
           path: '/404',
           component: () => import('@/views/error-page/404'),
           hidden: true
         },
         {
           path: '/401',
           component: () => import('@/views/error-page/401'),
           hidden: true
         },
         {
           path: '/view',
           component: Layout,
           redirect: '/home',
           children: [
             {
               path: '/home',
               component: () => import('@/views/home/index'),
               name: 'Home',
               meta: { title: '首页', icon: 'home' }
             },
             {
               path: '/details',
               component: () => import('@/views/home/details'),
               name: 'details',
               meta: { title: '详情页', icon: 'details' }
             },
             {
               path: '/login1',
               name: '登录1',
               component: () => import('@/views/login/index'),
               meta: { title: '登录1', icon: 'dashboard' }
             },
             {
               path: '/hello',
               component: () => import('@/views/error-page/404'),
               name: 'hello',
               meta: { title: '404', icon: 'dashboard' }
             },
             {
               path: '/hello1',
               component: () => import('@/views/error-page/404'),
               name: 'hello1',
               meta: { title: '405', icon: 'dashboard' }
             }
           ]
         }
       ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
