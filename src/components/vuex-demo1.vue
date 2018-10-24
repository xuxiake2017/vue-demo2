<template>
  <div>
    <h1>{{num}}</h1>
    <el-button @click="change">增加</el-button>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
store.commit('increment')

console.log(store.state.count)
export default {
  name: 'vuex-demo1',
  data () {
    return {
      num: this.$store.state.count
    }
  },
  store: store,
  methods: {
    change () {
      this.$store.commit('increment')
      this.num = this.$store.state.count;
    }
  }
}
</script>

<style scoped>

</style>
