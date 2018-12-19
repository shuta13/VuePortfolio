import Vue from 'vue'
import VirtualCollection from 'vue-virtual-collection'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VirtualCollection)

new Vue({
  render: h => h(App),
}).$mount('#app')
