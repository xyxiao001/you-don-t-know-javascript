import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: '',
    lanList: ['zh', 'en', 'ja'],
    path: '/'
  },
  getters: {
    getLanguage (state) {
      return state.language
    },
    getLanList (state) {
      return state.lanList
    },
    getPath (state) {
      return state.path
    }
  },
  mutations: {
    LANGUAGE_CHANGE (state, ployed) {
      state.language = ployed.language
    },
    PATH_CHANGE (state, ployed) {
      state.path = ployed.path
    }
  },
  actions: {
    setLanguage ({ commit }, ployed) {
      commit('LANGUAGE_CHANGE', ployed)
    },

    setPath ({ commit }, ployed) {
      commit('PATH_CHANGE', ployed)
    }
  }
})
