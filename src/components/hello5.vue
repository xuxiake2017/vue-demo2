<template>
  <button-counter1></button-counter1>
</template>

<script>
let buttonCounter1 = {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<button v-on:click='count++'>You clicked me {{ count }} times.</button>`
}
export default {
  name: 'hello5',
  components: {
    'button-counter1': buttonCounter1
  }
}
</script>

<style scoped>

</style>
