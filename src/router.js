import Vue from 'vue'
import Router from 'vue-router'
import DrinkSearch from '@/views/DrinkSearch'
import Random from '@/views/Random' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DrinkSearch',
      component: DrinkSearch
    },
    {
      path: '/random',
      name: 'RandomDrinks',
      component: Random
    }
  
  ]
})
