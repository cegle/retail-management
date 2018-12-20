import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Homepage from '../components/Homepage.vue'
import Logs from '../components/Logs.vue'
import Acount from '../components/Acount.vue'
import System from '../components/System.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/homepage',
    children: [{
        path: 'homepage',
        name: 'homepage',
        component: Homepage
      },
      {
        path: 'logs',
        component: Logs
      },
      {
        path: 'acount',
        component: Acount
      },
      {
        path: 'system',
        component: System
      }

    ]
  }]
})
