import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../components/MainPage'
import AddProduct from '../components/AddProduct'
import AddPromotion from '../components/AddPromotion'
import AllProducts from '../components/AllProducts'

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage
  }, {
    path: '/product-add',
    name: 'AddProduct',
    component: AddProduct
  }, {
    path: '/promotion-add',
    name: 'AddPromotion',
    component: AddPromotion
  }, {
    path: '/all-products',
    name: 'AllProducts',
    component: AllProducts
  }]
});
