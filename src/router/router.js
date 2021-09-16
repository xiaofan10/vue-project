import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
// 动态导入 使用webpack 提供的方法

/**
 * 动态加载组件
 */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Home,
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Home,
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../pages/Error'), // 点击菜单时加载组件,如果不加路由换成，每次点击都会初始化
    meta: {
      keepAlive: true // 路由中需要被缓存的组件,配合下面配置使用
      /**
       *  <keep-alive>
       <!-- 这里是会被缓存的视图组件 -->
       <router-view v-if="$route.meta.keepAlive" />
       </keep-alive>
       */
    },
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
export default router