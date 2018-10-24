<template>
    <div></div>
</template>

<script>
let mixinTest1 = {
  created () {
    this.hello();
  },
  methods: {
    hello () {
      console.log('mixinTest1');
    }
  }
}
export default {
  name: 'hello7',
  mixins: [mixinTest1]
}
</script>

<style scoped>

</style>
