import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';


Vue.use(Router)

export default new Router({
  mode: 'history', //去除URL中的"#"
  routes: [
    {
      path:'/',
      redirect: '/container'
    },
    {
      path:'/container',
      component:resolve =>require(['@/views/container.vue'],resolve)
    },
    {
      path:'/login',
      component:resolve =>require(['@/views/login/login.vue'],resolve)
    },
    {
      path:'/clickLogin',
      component:resolve =>require(['@/views/login/clickLogin.vue'],resolve)
    },
    {
      path:'/search',
      component:resolve =>require(['@/views/search/search.vue'],resolve)
    }
  ]
})
