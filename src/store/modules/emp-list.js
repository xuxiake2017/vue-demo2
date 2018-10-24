import { post } from '@/util/request'
export default {
  state: {
    empList: []
  },
  mutations: {
    'SET_EMP_LIST': (state, list) => {
      state.empList = list;
    }
  },
  actions: {
    'GET_EMP_LIST': ({ commit }, list) => {
      return new Promise((resolve, reject) => {
        post('empList').then(res => {
          commit('SET_EMP_LIST', res.data.data);
          resolve(res)
        }).catch((e) => {
          reject(e);
        })
      })
    }
  },
  getters: {
    'GET_EMP_LIST': state => state.empList
  }
}
