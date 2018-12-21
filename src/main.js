import Vue from 'vue'
import ElementUI from 'element-ui'
import {
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import App from './App'
import './assets/icon/iconfont.css'
import store from './store'
import axios from './utils/axios'
import plugin from './utils/plugin'

Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(plugin);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('userInfo') || JSON.stringify(store.getters.userInfo) === '{}') {
    if (to.name == 'login') {
      next();
    } else {
      Message.error("登录过期");
      router.replace('/');
    }
  } else {
    let module = to.path.split('/')[1] ? to.path.split('/')[1] : 'home';
    store.commit('ACTIVE_NAV', module);
    next();
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
