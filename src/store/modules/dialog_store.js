export default {
  state: {
    show: false
  },
  mutations: {
    switch_dialog (state) {
      console.log(state.show)
      state.show = !state.show
    }
  },
  actions: {
    switch_dialog (context) {
      context.commit('switch_dialog')
    }
  },
  getters: {
    'getShow': state => state.show
  }
}
