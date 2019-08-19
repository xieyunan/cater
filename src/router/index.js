import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:resolve =>require(['@/views/login/login.vue'],resolve)
    }
  ]
})
