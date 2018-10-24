import Vue from 'vue';
import Vuex from 'vuex';
import dialogStore from './modules/dialog_store'
import empList from './modules/emp-list'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dialogStore,
    empList
  }
})
