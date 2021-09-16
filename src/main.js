import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/style/global.css'
Vue.config.productionTip = false
/**
 * vue 路由
 * 使用配置好的vue-router插件
 * 需要注入配置，
 * 需要提供页面展示的地方 view-router
 * 需要提供切换的菜单 router-link
 * @type {Vue | object | Record<never, any>}
 */


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
