import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import threads from './modules/threads'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    setItems(state, { resource, data }) {
      state[resource].items = data
    },
    setItem(state, { resource, data }) {
      state[resource].item = data
    },
  },
  modules: {
    meetups,
    threads,
    categories
  }
})