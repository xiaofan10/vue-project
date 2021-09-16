import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Error from '../pages/Error'
// 动态导入 使用webpack 提供的方法

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
    component: Error,
  }
]

const router = new VueRouter({
  routes
})
console.log(router)
export default router