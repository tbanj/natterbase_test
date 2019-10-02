import Vue from 'vue'
import Router from 'vue-router'
import FourOhFour from './components/FourOhFour.vue'
import BuyInsurance from './components/BuyInsurance.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'dashbboard',
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Dashboard.vue')
    },
    {
      path: '/account-setting',
      name: 'account_settings',
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/AccountSettings.vue')
    },

    {
      path: '/buy-insurance',
      name: 'buyInsurance',
      component: BuyInsurance
    },
    {
      path: '/*',
      component: FourOhFour
    }
  ]
})
