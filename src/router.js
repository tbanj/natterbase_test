import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
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
      component: Dashboard
    },
    {
      path: '/account-setting',
      name: 'account_settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
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
