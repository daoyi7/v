import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    a: ''
  },
  actions: {
    aa({ commit }, aData) {
      commit('aa', aData)
    }
  }
})
