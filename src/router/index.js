import Vue from 'vue'
import Router from 'vue-router'
import Bin2Dec from '@/components/Bin2Dec'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bin2Dec',
      component: Bin2Dec
    }
  ]
})
