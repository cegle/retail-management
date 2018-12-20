import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: localStorage.getItem("userInfo") || {},
    activeNav: 'home'
  },
  getters: {
    userInfo: state => state.userInfo,
    activeNav: state => state.activeNav
  },
  mutations: {
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo;
      localStorage.setItem("userInfo", userInfo);
    },
    CLEAR_USERINFO(state) {
      state.userInfo = {};
      localStorage.removeItem("userInfo");
    },
    activeNav(state, module) {
      state.activeNav = module;
    }
  },
  actions: {}
})
