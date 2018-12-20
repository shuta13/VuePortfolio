import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import about from '@/components/about'
import app from '@/components/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/app',
      name: 'app',
      component: app
    }
  ]
})