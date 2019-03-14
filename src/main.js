import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.use(axios);

const base = axios.create({
  baseURL: 'http://192.168.0.51:4000'
});

Vue.prototype.$http = base;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
