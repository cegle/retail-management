import axios from 'axios'
import qs from 'qs'
import CONFIG from './config'
import store from '../store/index'
import router from '../router/index'
import {
  Message
} from 'element-ui'

axios.defaults.baseURL = CONFIG.api;
axios.defaults.timeout = 5000;
axios.interceptors.request.use((config) => {
  config.withCredentials = true;
  if (config.type == 'form' && config.file != 'image') {
    config.data = qs.stringify(config.data);
  } else {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }
  return config
}, (err) => {
  Message.error('请求超时');
  return Promise.reject(err);
});

axios.interceptors.response.use((res) => {
  if (res.data.errno == 200) {
    return res.data.data
  } else if (res.data.errno == 416) {
    Message.error('登录失效');
    setTimeout(() => {
      store.commit('CLEAR_USERINFO');
      router.push('/');
    }, 500)
  } else if (res.data.errno == '0000') {
    Message.error(res.data.msg);
    return Promise.reject(res.msg);
  } else {
    return Promise.reject(res.msg);
  }
}, (err) => {
  return Promise.reject(err);
});

export default axios;
