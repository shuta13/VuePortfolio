import VueRouter from 'vue-router'

import home from '@/components/home';
import about from '@/components/about'
import app from '@/components/app'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/app',
      component: app
    }
  ]
})

export default router;
