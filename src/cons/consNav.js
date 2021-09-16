import Home from "../pages/Home";
import Error from "../pages/Error";

/**
 * 导航菜单
 * @type {({path: string, component, name: string}|{path: string, component, name: string}|{path: string, component, name: string})[]}
 */
const NAV_LIST = [
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
export default {
  NAV_LIST,
}