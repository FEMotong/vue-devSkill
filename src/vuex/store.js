import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  AMSG: '',
  BMSG: ''
}

const mutations = {
  receiveAMSG(state, payload) {
    state.AMSG = payload.AMSG
  },
  receiveBMSG(state, payload) {
    state.BMSG = payload.BMSG
  },
}

export default new Vuex.Store({
  state,
  mutations
})
