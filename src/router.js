import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from './components/Bar.vue'

Vue.use(VueRouter)
export default function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Bar
      },
      {
        path: '/foo',
        component: () => import('./components/Foo.vue')
      }
    ]
  })
  return router
}
