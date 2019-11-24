import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

Vue.use(VueMeta, {
  // tagIDKeyName: 'hid'
})
export default function createApp() {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })
  return { app, router, store }
}
