import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default function createStore() {
  const store = new Vuex.Store({
    state: {
      name: 'Wenli'
    },
    mutations: {
      set_username(state) {
        state.name = 'Brolly'
      }
    },
    actions: {
      set_username({ commit }) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('set_username')
            resolve()
          }, 1000)
        })
      }
    }
  })
  /* eslint-disable */

  if (typeof window !== 'undefined' && window.__INITIAL__STATE__) {
    store.replaceState(window.__INITIAL__STATE__)
  }
  return store
}
