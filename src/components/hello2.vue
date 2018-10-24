<template>
  <div>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
</template>

<script>
let buttonCounter = {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<button v-on:click='count++'>You clicked me {{ count }} times.</button>`
}
export default {
  name: 'hello2',
  components: {
    'button-counter': buttonCounter
  }
}
</script>

<style scoped>

</style>
