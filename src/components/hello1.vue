<template>
<div>
  <h1>{{msg}}</h1>
  <h1 :v-bind:id="id"></h1>
  <div>
    <el-button @click="message">这是按钮</el-button>
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
    message: function () {
      // 全局的Message
      this.$message('这是一条消息提示');
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}

// es6新特性
let sum = (x, y) => x + y
let test = () => {
  console.log(`哈哈哈哈
    我们
    <html></html>`);
  console.log(this);
  let map = new Map();
  map.set(1, 'apple');
  map.set(2, 'pear');
  map.set(3, 'banana');
  console.log(map);
  map.forEach((value, key) => {
    console.log(`key:${key},value:${value}`)
    console.log(this)
  })
};
test();

console.log(sum(1, 2));
</script>

<style scoped>

</style>
