import Vue from 'vue'
import VueRouter from 'vue-router'
import ECalc from '../views/ECalc'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ecalc',
    component: ECalc
  }
]

const router = new VueRouter({
  routes
})

export default router
