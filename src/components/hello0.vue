<template>
   <div>
     <el-button @click="funA">按钮</el-button>
   </div>
</template>

<script>
export default {
  name: 'hello0',
  methods: {
    funA: function () {
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
        })
      };
      test();

      console.log(sum(1, 2));
    }
  }
}
</script>

<style scoped>

</style>
