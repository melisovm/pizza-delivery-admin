import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../components/MainPage'
import AddProduct from '../components/AddProduct'
import AddPromotion from '../components/AddPromotion'
import AllProducts from '../components/AllProducts'
import AllPromotions from '../components/AllPromotions'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Promotions from '../components/Promotions'
import AddCategory from '../components/AddCategory'
import Orders from '../components/Orders'
import OrderInfoModal from '../components/OrderInfoModal'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'MainPage',
      component: MainPage,
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
    }, {
      path: '/all-promotions',
      name: 'AllPromotions',
      component: AllPromotions
    }, {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }, {
      path: '/promotions',
      name: 'Promotions',
      component: Promotions
    },
    {
      path: '/add-category',
      name: 'AddCategory',
      component: AddCategory

    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders

    },
    {
      path: '/order-info',
      name: 'OrderInfoModal',
      component: OrderInfoModal

    }
  ]
});
