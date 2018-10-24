<template>
<div>
  <h1>{{msg}}</h1>
  <h1 :v-bind:id="id"></h1>
  <div>
    <el-button @click="message1">这是按钮1</el-button>
    <el-button @click="message2">这是按钮2</el-button>
    <ul>
      <li v-for="n in even(numbers)" v-bind:key="n">{{ n }}</li>
    </ul>
  </div>
</div>
</template>

<script>
import {Message} from 'element-ui';

export default {
  name: 'hello1',
  data () {
    return {
      msg: '哈哈',
      id: 'h1',
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  created: function () {
    // 导入的Message
    Message('这又是一条消息提示');
  },
  methods: {
    message1: function () {
      // 全局的Message
      this.$message('这是一条消息提示');
    },
    message2: function () {
      // 全局的Message
      this.$notify({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      });
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>

<style scoped>

</style>
