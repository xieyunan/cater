// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios';

Vue.use(vueSwiper);
Vue.prototype.$http = axios.create({
  baseURL:'/static/data/'
})


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/image/lazy_load.png'),
  loading: require('./assets/image/lazy_load.png'),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
