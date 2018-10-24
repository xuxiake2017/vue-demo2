<template>
  <div>
    <component-a :show.sync="show"></component-a>
    <el-button @click="show = !show">按钮</el-button>
  </div>
</template>

<script>
let componentA = {
  props: ['show'],
  template: `
  <div>
    <el-dialog title="提示" :visible.sync="show" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:show',false)">取 消</el-button>
        <el-button type="primary" @click="$emit('update:show',false)">确 定</el-button>
      </span>
    </el-dialog>
  </div>`
}
export default {
  name: 'hello9',
  components: {
    componentA
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>

</style>
