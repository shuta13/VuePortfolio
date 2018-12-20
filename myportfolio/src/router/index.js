import VueRouter from 'vue-router'

import home from '@/components/home';
import about from '@/components/about';
import app from '@/components/app';
import graphics from '@/components/graphics';
import paint from '@/components/paint';
import music from '@/components/music';
import others from '@/components/others';

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
    },
    {
      path: '/graphics',
      component: graphics
    },
    {
      path: '/paint',
      component: paint
    },
    {
      path: '/music',
      component: music
    },
    {
      path: '/others',
      component: others
    },
  ]
})

export default router;
