<template>
  <div>
    <el-button @click="$store.dispatch('switch_dialog')" size="small">点击</el-button>
    <t-dialog></t-dialog>
  </div>
</template>

<script>
import dialog from '@/components/dialog'
export default {
  name: 'vuex-demo2',
  components: {
    't-dialog': dialog
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    console.log(this)
  }
}
</script>

<style scoped>

</style>
