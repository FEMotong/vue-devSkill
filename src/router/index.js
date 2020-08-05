import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routeOptions = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
    path: '/ComponentCommunication',
    name: 'ComponentCommunication'
  }
]

/*eslint-disable*/
const routes = routeOptions.map(item => {
  let route = {}
  if (!item.component) {
      route = {
        ...item,
        component: () => import(/*webpackChunkName: "[request]" */ `../views/${item.name}.vue`)  // [request] 解析文件名  （代码分割）
      }
  }
  return route
})




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
