import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [{
      name: "Пицца Оливье",
      description: "Зеленый горошек, картофель и морковь в кубиках, огурцы маринованные, моцарелла, цыпленок, ветчина из говядины и французский соус с ароматом трюфеля",
      price: 625,
      image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fade8c33-27e4-4c84-acd2-4a0138f7baa1.jpg",
      quantity: 0,
      id: 1,
      totalPrice: 0,
      halalState: true,
      date: "1.01.2019"
    }],
    combos: [],
    drinks: [],
    desserts: [],
    newProduct: {},
    promotions: []
  },
  getters: {
    getPromotions: state => state.promotions,
    getPizzas: state => state.pizzas,
    getCombos: state => state.combos,
    getDrinks: state => state.drinks,
    getDesserts: state => state.desserts
  },
  mutations: {
    GET_PRODUCT(state, product) {
      state.newProduct = product;
    },
    ADD_PRODUCT(state, product_name, product_description, category, product_price, product_image, halalState) {
      console.log('from store', category);
      if (category === 'pizzas') {
        state.pizzas.push({
          name: product_name,
          description: product_description,
          price: product_price,
          image: product_image,
          id: state.items.length,
          halalState: halalState,
          date: Date.now()
        });
      }
    }

  },
  actions: {
    addProduct({
      commit
    }, product_name, product_description, category, product_price, product_image, halalState) {
      commit('ADD_PRODUCT', product_name, product_description, category, product_price, product_image, halalState);
    }
  }
});
