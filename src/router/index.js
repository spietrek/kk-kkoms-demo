import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/KkHomePage.vue'

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
      import(/* webpackChunkName: "dcb" */ '@/pages/dcb/KkDcbPage.vue'),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () =>
      import(
        /* webpackChunkName: "inventory" */ '@/pages/inventory/KkInventoryPage.vue'
      ),
  },
  {
    path: '/advanced-orders',
    name: 'Advanced Orders',
    component: () =>
      import(
        /* webpackChunkName: "advanced-orders" */ '@/pages/advancedOrders/KkAdvancedOrdersPage.vue'
      ),
  },
  {
    path: '/hr-bridge',
    name: 'HR Bridge',
    component: () =>
      import(
        /* webpackChunkName: "hr-bridge" */ '@/pages/hrBridge/KkHrBridgePage.vue'
      ),
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () =>
      import(
        /* webpackChunkName: "finance" */ '@/pages/finance/KkFinancePage.vue'
      ),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ '@/pages/notFound/KkNotFoundPage.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
