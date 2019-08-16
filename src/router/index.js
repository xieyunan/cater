import Vue from 'vue'
import Router from 'vue-router'
import container from '@/views/container.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    }
  ]
})
