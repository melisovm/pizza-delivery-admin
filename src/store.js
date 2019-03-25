import Vue from "vue";
import Vuex from "vuex";
import axios from "./plugins/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    defaultUrl: "http://192.168.0.51:4000",
    newProduct: {},
    categories: [],
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
    ],
    orders: [],
  },
  getters: {
    getOrders: state => state.orders.filter(order => order.status === "not_done"),
    getOrdersInProcess: state => state.orders.filter(order => order.status === "process"),
    getOrdersFinished: state => state.orders.filter(order => order.status === "done"),
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
    getCategories: state => state.categories
  },
  mutations: {
    ADD_PRODUCT: (state, payload) => {
      if (payload.halalStatus === -1) {
        payload.halalStatus === false;
      }
      state.products.push(payload);
    },
    ADD_CATEGORY: (state, payload) => {
      state.categories.push(payload);
    },
    ADD_PROMOTION: (state, payload) => {
      payload.id = state.promotions.length + 1;
      state.promotions.push(payload);
    },
    REMOVE_PRODUCT: (state, payload) => {
      state.products.splice(state.products.indexOf(payload), 1);
    },
    REMOVE_PROMOTION: (state, payload) => {
      state.promotions.splice(state.promotions.indexOf(payload), 1);
    },
    EDIT_PRODUCT: (state, payload) => {
      let id = payload._id;
      let editableProduct = state.products.find(element => element.id === id);
      editableProduct.name = payload.name;
      editableProduct.category = payload.category;
      editableProduct.description = payload.description;
      editableProduct.price = payload.price;
      editableProduct.image = payload.image;
      editableProduct.halalStatus = payload.halalStatus;
    },
    EDIT_CATEGORY: (state, payload, formData) => {
      let id = payload._id;
      let editableCategory = state.categories.find(
        element => element.id === id
      );
      editableCategory.name = payload.name;
      editableCategory.code = payload.code;
    },
    EDIT_PROMOTION: (state, payload) => {
      let id = payload.id;
      let editablePromotion = state.promotions.find(
        element => element.id === id
      );
      editablePromotion.name = payload.name;
      editablePromotion.description = payload.description;
      editablePromotion.image = payload.image;
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    DELETE_CATEGORY: (state, payload) => {
      state.categories.splice(state.categories.indexOf(payload), 1);
    },
    REMOVE_ORDER: (state, payload) => {
      state.orders.splice(state.orders.indexOf(payload), 1);
    },
    CONFIRM_ORDER: (state, order) => {
      // state.ordersInProcess.unshift(payload);
      order.status = "process";
    },
    CHANGE_STATUS_ACTIVE: (state, order) => {
      order.status = "not_done";
    },
    SET_ORDERS: (state, order) => {
      state.orders = order;
    },
    CHANGE_STATUS_FINISH: (state, order) => {
      order.status = "done";
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
      console.log("action", payload);
      axios
        .post("product", payload)
        .then(res => {
          console.log("added", res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    editProduct({
      commit
    }, {
      editedProduct,
      editedFormData
    }) {
      console.log("formData", editedFormData);
      axios
        .put("product", editedFormData)
        .then(res => console.log("edited", res))
        .catch(err => console.error(err.res));
      commit("EDIT_PRODUCT", editedProduct, editedFormData);
    },
    editCategory({
      commit
    }, payload) {
      axios
        .put("category", payload)
        .then(res => console.log("edited catt.", res))
        .catch(err => console.error(err));
      commit("EDIT_CATEGORY", payload);
    },
    editPromotion({
      commit
    }, payload) {
      commit("EDIT_PROMOTION", payload);
    },
    addCategory({
      commit
    }, payload) {
      commit("ADD_CATEGORY", payload);
      axios
        .post("category", payload)
        .then(res => console.log("added cat.", res))
        .catch(err => console.error(err));
    },
    deleteCategory({
      commit
    }, payload) {
      axios
        .delete("category", {
          data: {
            id: payload._id
          }
        })
        .then(res => {})
        .catch(err => console.error(err));
      commit("DELETE_CATEGORY", payload);
    },
    deleteProduct({
      commit
    }, payload) {
      axios
        .delete("product", {
          data: {
            id: payload._id
          }
        })
        .then(res => {})
        .catch(err => console.error(err));
      commit("REMOVE_PRODUCT", payload);
    },
    deletePromotion({
      commit
    }, payload) {
      commit("REMOVE_PROMOTION", payload);
    },
    deleteOrder({
      commit
    }, payload) {
      axios.delete("order", {
        data: {
          id: payload._id
        }
      })
      commit("REMOVE_ORDER", payload);
    },
    confirmOrder({
      commit
    }, payload) {
      commit("CONFIRM_ORDER", payload);
    },
    changeStatus({
      commit
    }, order) {
      let statusOrder = {
        id: order._id,
        status: "process"
      }
      axios
        .put("order/status", statusOrder)
        .catch(err => console.error(err))
      commit('CONFIRM_ORDER', order)
    },
    changeStatusActive({
      commit
    }, order) {
      let statusOrder = {
        id: order._id,
        status: "not_done"
      }
      axios
        .put("order/status", statusOrder)
        .catch(err => console.error(err))
      commit('CHANGE_STATUS_ACTIVE', order)
    },
    finishOrder({
      commit
    }, order) {
      let statusOrder = {
        id: order._id,
        status: "done"
      }
      axios
        .put("order/status", statusOrder)
        .catch(err => console.error(err))
      commit("CHANGE_STATUS_FINISH", order);
    },
    fetchProduct({
      commit
    }) {
      return axios
        .get("product")
        .then(response => {
          let products = response.data.products;
          commit("SET_PRODUCTS", products);
        })
        .catch(err => console.error(err));
    },
    fetchCategories({
      commit
    }) {
      axios
        .get("category")
        .then(res => {
          let categories = res.data.categories;
          commit("SET_CATEGORIES", categories);
        })
        .catch(err => console.error(err));
    },
    fetchOrders({
      commit,
      dispatch,
      state
    }) {
      axios
        .get('order')
        .then((res) => {
          let orders = res.data.orders
          if (!state.products.length) {
            dispatch('fetchProduct').then(() => {
              let products = state.products
              console.log('test', products);
              orders.forEach(order => {
                order.orderList = order.orderList.map((element) => {
                  let product = products.find(product => product._id === element.product_id)
                  if (product) {
                    element.product_name = product.name;
                  }
                  return element
                })

              })
              console.log('test order', orders);
              commit('SET_ORDERS', orders)
            });
          }

        })
        .catch(err => console.error(err));
    }
  }
});
