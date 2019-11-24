<template>
  <div id="app">
    <router-link to="/">Bar</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

export default {
  name: "App",
  components: {
    Foo,
    Bar
  },
  metaInfo: {
    title: 'Hello Brolly',
    bodyAttrs: {
      class: 'dark'
    },
    meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: 'Hello World'
      },
      {
        hid: 'og:title',
        name: 'description',
        content: 'Hello World'
      }
    ]
  }
}
</script>
