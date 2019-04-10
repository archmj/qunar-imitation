import Vue from 'vue'
import Vuex from 'vuex'
import status from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: status,
  mutations: mutations
})
