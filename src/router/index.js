import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/KkHomeView.vue'

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
      import(/* webpackChunkName: "dcb" */ '@/views/dcb/KkDcbView.vue'),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () =>
      import(
        /* webpackChunkName: "inventory" */ '@/views/inventory/KkInventoryView.vue'
      ),
  },
  {
    path: '/advanced-orders',
    name: 'Advanced Orders',
    component: () =>
      import(
        /* webpackChunkName: "advanced-orders" */ '@/views/advancedOrders/KkAdvancedOrdersView.vue'
      ),
  },
  {
    path: '/hr-bridge',
    name: 'HR Bridge',
    component: () =>
      import(
        /* webpackChunkName: "hr-bridge" */ '@/views/hrBridge/KkHrBridgeView.vue'
      ),
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () =>
      import(
        /* webpackChunkName: "finance" */ '@/views/finance/KkFinanceView.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
