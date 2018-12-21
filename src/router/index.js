import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  }, {
    path: '/home',
    name: 'home',
    component: resolve => {
      require(['../views/Home.vue'], resolve)
    },
    redirect: '/home/homepage',
    children: [{
        path: '/home/homepage',
        name: 'homepage',
        component: resolve => {
          require(['../views/index/Homepage.vue'], resolve)
        }
      },
      {
        path: '/home/logs',
        name: 'logs',
        component: resolve => {
          require(['../views/index/Logs.vue'], resolve)
        }
      },
      {
        path: '/home/account',
        name: 'account',
        component: resolve => {
          require(['../views/index/Account.vue'], resolve)
        }
      },
      {
        path: '/home/system',
        name: 'system',
        component: resolve => {
          require(['../views/index/System.vue'], resolve)
        }
      }

    ]
  }]
})
