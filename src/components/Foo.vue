<template>
  <div id="foo" class="foo" @click="handleClick()">
    Foo Page
  </div>
</template>
<script>
export default {
  name: "Foo",
  methods: {
    handleClick() {
      alert(1)
    }
  }
}
</script>
<style lang="css" scoped>
.foo {
  background: red;
}
</style>
