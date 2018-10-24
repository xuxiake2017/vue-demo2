<template>
  <div>
    <a v-bind:href="url">{{name}}</a>
    <button @click="tab">点击切换</button>
    <ul>
      <li v-for="(v, i) in names" v-bind:key="i">
        {{v}}
      </li>
    </ul>
    <el-button @click="even">这是按钮3</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello4',
  data () {
    return {
      url: 'http://www.baidu.com',
      name: '百度',
      urls: ['http://www.baidu.com', 'http://www.jd.com', 'http://www.xxiak.com'],
      names: ['百度', '京东', '徐霞客']
    }
  },
  methods: {
    tab: function () {
      let i = Math.floor(Math.random() * 3);
      console.log(i)
      this.url = this.urls[i];
      this.name = this.names[i]
    },
    even: function () {
      this.names.splice(this.names.length, 1, 'msdn');
    }
  }
}
</script>

<style scoped>

</style>
