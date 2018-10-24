<template>
  <div>
    <component-a>哈哈哈</component-a>
  </div>
</template>

<script>
let componentA = {
  template: `
    <h1><slot></slot></h1>
  `
}
export default {
  name: 'hello8',
  components: {
    'component-a': componentA
  }
}
</script>

<style scoped>

</style>
