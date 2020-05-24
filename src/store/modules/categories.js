import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    getCategories(state) {
      return state.items
    }
  },
  actions: {
    fetchCategories({state, commit}) {
      // commit('setItems', {resource:'categories' , data: []}, {root: true})
      return axios.get('/api/v1/categories')
      .then(response => {
        commit('setItems', {resource:'categories' , data: response.data}, {root: true})
        return state.items 
      })
    }
  },
  mutations: {}
}