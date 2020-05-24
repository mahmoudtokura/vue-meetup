import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    getMeetupThread(state) {
      return state.items
    },
  },
  actions: {
    fetchMeetupThread({state, commit}, payload) {
      commit('setItems', {resource: 'threads' ,data: []}, {root: true})
      const {meetupId} = payload
      return axios.get(`/api/v1/threads?meetupId=${meetupId}`)
      .then(response => {
        commit('setItems', {resource: 'threads' ,data: response.data}, {root: true})
        return state.items
      })
    },
  },
  mutations: {}
}