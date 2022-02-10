import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/KkHome.vue'

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
      import(/* webpackChunkName: "dcb" */ '@/views/dcb/KkDcb.vue'),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () =>
      import(
        /* webpackChunkName: "inventory" */ '@/views/inventory/KkInventory.vue'
      ),
  },
  {
    path: '/advanced-orders',
    name: 'Advanced Orders',
    component: () =>
      import(
        /* webpackChunkName: "advanced-orders" */ '@/views/advancedOrders/KkAdvancedOrders.vue'
      ),
  },
  {
    path: '/hr-bridge',
    name: 'HR Bridge',
    component: () =>
      import(
        /* webpackChunkName: "hr-bridge" */ '@/views/hrBridge/KkHrBridge.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
