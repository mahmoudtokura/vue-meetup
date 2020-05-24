import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },
  getters: {
    getMeetups(state) {
      return state.items
    },
    getMeetup(state) {
      return state.item
    },
  },
  actions: {
    fetchMeetups({state, commit}) {
      commit('setItems', {resource: 'meetups' ,data: []}, {root: true})
      return axios.get('/api/v1/meetups')
      .then(response => {
        commit('setItems', {resource: 'meetups' ,data: response.data}, {root: true})
        return state.items
      })
    },
    fetchMeetupById({state, commit}, payload) {
      commit('setItem', {resource: 'meetups' , data: {}}, {root: true})
      const {meetupId} = payload
      return axios.get(`/api/v1/meetups/${meetupId}`)
      .then(response => {
        commit('setItem', {resource: 'meetups' , data: response.data}, {root: true})
        return state.item 
      })
    },
  },
  mutations: {}
}