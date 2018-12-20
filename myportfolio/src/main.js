import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index.js';

import App from './App.vue'

import './assets/sass/style.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
