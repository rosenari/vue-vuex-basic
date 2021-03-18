import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    addCounter(state) {
      return state.counter++;
    },
    subCounter(state) {
      return state.counter--;
    }
  },
  actions: {
    addCounter(context) {
      return context.commit('addCounter');
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    }
  }
})
