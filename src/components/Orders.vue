<template>
  <div class="container">
    <h1 class="title">Заказы</h1>
    <h2 class="subtitle">Активные</h2>
    <div
      class="box navbar"
      v-for="(order, index) in getOrders"
      :key="index"
    >
      <div class="navbar-brand navbar-item">
        <p class="subtitle">{{index+1}}</p>
      </div>
      <div class="navbar-item">
        <p class="title">{{order.name}}</p>
      </div>
      <div class="navbar-item">
        <p class="subtitle"> <b>Телефон:</b> {{order.address}}</p>
      </div>
      <div class="navbar-item">
        <p class="subtitle"><b>Адрес</b>: {{order.phone}}</p>
      </div>
      <div class="navbar-item">
        <p class="subtitle">Заказ на сумму <b>{{order.total}}</b> сом</p>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-danger">Удалить</button>
        </div>
        <div class="navbar-item">
          <button class="button is-primary">Подтвердить</button>
        </div>
      </div>
    </div>
    <h2 class="subtitle">В процессе </h2>
    <div
      class="box navbar"
      v-for="(order, index) in getOrdersInProcess"
      :key="index"
    >
      <div class="navbar-item">
        <p class="title">{{order.name}}</p>
      </div>
      <div class="navbar-item">
        <p class="subtitle">{{order.address}}</p>
      </div>
      <div class="navbar-item">
        <p class="subtitle">{{order.phone}}</p>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-warning">Выполнен</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getOrders', 'getOrdersInProcess'])
  }
}
</script>

<style>
</style>
