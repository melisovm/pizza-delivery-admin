import axios from 'axios';
import Vue from 'vue';

Vue.use(axios);

const base = axios.create({
  baseURL: 'http://192.168.0.51:4000'
});

Vue.prototype.$http = base;

export default base;
