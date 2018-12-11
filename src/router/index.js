import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Homepage from '../components/Homepage.vue'
import Logs from '../components/Logs.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/home',
    component: Home,
    children:[
      {path:'homepage',component:Homepage},
      {path:'logs',component:Logs}
    ]
  }]
})
