import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
        category: 'combos',
        name: "Пицца ",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
        id: 1,
        date: Date.now()
      },
      {
        category: 'combos',
        name: "Комбо1",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
        id: 2,
        date: Date.now()
      },
      {
        category: 'combos',
        name: "напиток1",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: false,
        id: 3,
        date: Date.now()
      },
      {
        category: 'combos',
        name: "дессерт1",
        description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
        price: 625,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
        halalStatus: true,
        id: 4,
        date: Date.now()
      },
    ],
    newProduct: {},
    promotions: [{
        name: "День Рождения",
        description: "В день вашего рождения дарим Пиццу-пирог 25 см! Акция действует по промокоду D120 один раз.",
        image: "http://www.metroves.ru/upload/iblock/e71/e7173f9295275c498c4491536ac1a76c.png",
        id: 1,
        date: Date.now()
      },
      {
        name: "Доставим вовремя или за наш счет",
        description: "Мы придерживаемся золотых правил и всегда следим за тем, чтобы наши заказы доставлялись вовремя, а лучше даже раньше обещанного времени.",
        image: "http://mobile.mypizza.kg:9715/api/ImageFor?id=3115",
        id: 2,
        date: Date.now()
      }
    ]
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
      if (payload.halalStatus === -1) {
        payload.halalStatus === false;
      }
      state.products.push(payload);
    },
    ADD_PROMOTION: (state, payload) => {
      payload.id = state.promotions.length + 1;
      state.promotions.push(payload);
    },
    REMOVE_PRODUCT: (state, payload) => {
      state.products.splice(state.products.indexOf(payload), 1)
    },
    REMOVE_PROMOTION: (state, payload) => {
      state.promotions.splice(state.promotions.indexOf(payload), 1)
    },
    EDIT_PRODUCT: (state, payload) => {
      let id = payload.id;
      let editableProduct = state.products.find(element => element.id === id);
      editableProduct.name = payload.name;
      editableProduct.category = payload.category;
      editableProduct.description = payload.description;
      editableProduct.price = payload.price;
      editableProduct.image = payload.image;
      editableProduct.halalStatus = payload.halalStatus;
      console.log('name', editableProduct);
    },
    EDIT_PROMOTION: (state, payload) => {
      let id = payload.id;
      let editablePromotion = state.promotions.find(element => element.id === id)
      editablePromotion.name = payload.name;
      editablePromotion.description = payload.description;
      editablePromotion.image = payload.image;
    }
  },
  actions: {
    addPromotion({
      commit
    }, payload) {
      commit("ADD_PROMOTION", payload);
    },
    addProduct({
      commit
    }, payload) {
      commit("ADD_PRODUCT", payload);
    },
    editProduct({
      commit
    }, payload) {
      commit("EDIT_PRODUCT", payload);
    },
    editPromotion({
      commit
    }, payload) {
      commit("EDIT_PROMOTION", payload);
    },
    deleteProduct({
      commit
    }, payload) {
      commit("REMOVE_PRODUCT", payload);
    },
    deletePromotion({
      commit
    }, payload) {
      commit("REMOVE_PROMOTION", payload)
    }
  }
});
