import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dcb',
    name: 'DCB',
    component: () => import(/* webpackChunkName: "dcb" */ '../views/Dcb.vue'),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () =>
      import(/* webpackChunkName: "inventory" */ '../views/Inventory.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
