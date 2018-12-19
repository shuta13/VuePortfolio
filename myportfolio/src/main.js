import Vue from 'vue'
import VirtualCollection from 'vue-virtual-collection'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/sass/style.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VirtualCollection)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
