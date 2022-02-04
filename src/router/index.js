import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/features/home/containers/KkHome.vue'

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
    component: () =>
      import(
        /* webpackChunkName: "dcb" */ '@/components/features/dcb/containers/KkDcb.vue'
      ),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () =>
      import(
        /* webpackChunkName: "inventory" */ '@/components/features/inventory/containers/KkInventory.vue'
      ),
  },
  {
    path: '/advanced-orders',
    name: 'Advanced Orders',
    component: () =>
      import(
        /* webpackChunkName: "advancedOrders" */ '@/components/features/advancedOrders/containers/KkAdvancedOrders.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
