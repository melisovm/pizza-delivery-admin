import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [],
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
    }
  }
});
