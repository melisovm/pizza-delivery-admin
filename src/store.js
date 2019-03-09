import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
        category: 'pizzas',
        name: "Пицца ",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
      },
      {
        category: 'combos',
        name: "Комбо1",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
      },
      {
        category: 'drinks',
        name: "напиток1",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
      },
      {
        category: 'desserts',
        name: "дессерт1",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
      },
    ],
    newProduct: {},
    promotions: []
  },
  getters: {
    getPromotions: state => state.promotions,
    getProducts: state => state.products,
    getPizzas: state =>
      state.products.filter(element => element.category === "pizzas"),
    getCombos: state =>
      state.products.filter(element => element.category === "combos"),
    getDrinks: state =>
      state.products.filter(element => element.category === "drinks"),
    getDesserts: state =>
      state.products.filter(element => element.category === "desserts"),
  },
  mutations: {
    ADD_PRODUCT: (state, payload) => {
      payload.id = state.products.length + 1;
      console.log("from mutation", payload);
      console.log('test', payload.halalStatus);
      if (payload.halalStatus === -1) {
        payload.halalStatus === false;
      }
      state.products.push(payload);
    },
    ADD_PROMOTION: (state, payload) => {
      payload.id = state.promotions.length + 1;
      state.promotions.push(payload);
    }
  },
  actions: {
    addPromotion({
      commit
    }, payload) {
      commit("ADD_PROMOTION", payload);
      console.log("from action", payload);
    },
    addProduct({
      commit
    }, payload) {
      // console.log("from action", payload);

      commit("ADD_PRODUCT", payload);

    }
  }
});
