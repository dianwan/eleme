import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index'
import Order from '../pages/order'
import Discover from '../pages/discover'
import Profile from '../pages/profile'
import Error404 from '../pages/error404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '*',
      component: Error404,
    }
  ]
})
