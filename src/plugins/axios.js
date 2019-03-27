import axios from 'axios';
import Vue from 'vue';

Vue.use(axios);

const base = axios.create({
  baseURL: 'http://devforge.ddns.net:2000'
});

Vue.prototype.$http = base;

export default base;
