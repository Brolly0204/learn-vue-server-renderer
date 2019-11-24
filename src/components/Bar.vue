<template>
<div id="bar">
  Bar Page
  {{$store.state.name}}
</div>
</template>
<script>
export default {
  name: "Bar",
  asyncData({
    store
  }) {
    return store.dispatch('set_username')
  },
  mounted() {
    //do something after mounting vue instance
    this.$store.dispatch('set_username')
  }
}
</script>
<style lang="css" scoped>
.bar {
  color: red;
}
</style>
