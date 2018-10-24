<template>
  <div>
    <my-component v-bind:prop-a="13" v-bind:prop-b="13" v-bind:prop-c="13"></my-component>
  </div>
</template>

<script>
let myComponent = {
  props: {
    // 基础的类型检查 (`null` 匹配任何类型)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String
      // required: true
    }
    // // 带有默认值的数字
    // propD: {
    //   type: Number,
    //   default: 100
    // },
    // // 带有默认值的对象
    // propE: {
    //   type: Object,
    //   // 对象或数组默认值必须从一个工厂函数获取
    //   default: function () {
    //     return { message: 'hello' }
    //   }
    // },
    // // 自定义验证函数
    // propF: {
    //   validator: function (value) {
    //     // 这个值必须匹配下列字符串中的一个
    //     return ['success', 'warning', 'danger'].indexOf(value) !== -1
    //   }
    // }
  },
  template: `
  <div>
  <h1>{{propA}}</h1>
<h1>{{propB}}</h1>
<el-input v-model="propC"></el-input>
</div>
  `
  // data () {
  //   return {
  //     propA: 12,
  //     propB: 24,
  //     propC: '12'
  //   }
  // }
}
export default {
  name: 'hello6',
  components: {
    'my-component': myComponent
  }
}
</script>

<style scoped>

</style>
