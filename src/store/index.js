import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/common/auth'
import shell from './modules/common/shell'

import advancedOrders from './modules/features/advancedOrders'
import dcb from './modules/features/dcb'
import hrBridge from './modules/features/hrBridge'
import inventory from './modules/features/inventory'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    shell,
    advancedOrders,
    dcb,
    hrBridge,
    inventory,
  },
})
