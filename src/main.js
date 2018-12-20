import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App'
import './assets/icon/iconfont.css'
import store from './store'
import axios from './utils/axios'
import plugin from './utils/plugin'

Vue.prototype.$http = axios

Vue.use(ElementUI);
Vue.use(plugin);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
