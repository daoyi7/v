import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  nav: true
}

const mutations = {
  toggle(state) {
    if(state.nav) {
      state.nav = false
    } else {
      state.nav = true
    }
  }
}

const actions = {
  goNav({
    commit
  }) {
    commit('go')
  },
  backNav({
    commit
  }) {
    commit('back')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
