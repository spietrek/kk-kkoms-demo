const state = {
  count: 0,
  isLoading: false,
}

const getters = {
  currentCount: state => {
    return state.count
  },
  isLoading: state => {
    return state.isLoading
  },
}

const mutations = {
  setIncrement(state) {
    state.count++
  },
  setDecrement(state) {
    state.count--
  },
  setReset(state) {
    state.count = 0
  },
  setLoading(state, payload) {
    state.isLoading = payload
  },
}

const actions = {
  incrementAsync({ commit }) {
    commit('setLoading', true)
    new Promise(resolve => {
      setTimeout(() => {
        commit('setIncrement')
        resolve()
      }, 1500)
    }).then(() => {
      commit('setLoading', false)
    })
  },
  decrementAsync({ commit }) {
    commit('setLoading', true)
    new Promise(resolve => {
      setTimeout(() => {
        commit('setDecrement')
        resolve()
      }, 1500)
    }).then(() => {
      commit('setLoading', false)
    })
  },
  resetAsync({ commit }) {
    commit('setLoading', true)
    new Promise(resolve => {
      setTimeout(() => {
        commit('setReset')
        resolve()
      }, 1500)
    }).then(() => {
      commit('setLoading', false)
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
