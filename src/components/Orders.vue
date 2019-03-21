<template>
  <div class="container">
    <h1 class="title">Заказы</h1>
    <h2 class="subtitle">Активные</h2>
    <transition-group
      name="list"
      tag="div"
    >

      <div
        class="box navbar "
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
          <p class="subtitle"> <b>Телефон:</b> {{order.phone}}</p>
        </div>
        <div class="navbar-item">
          <p class="subtitle"><b>Адрес</b>: {{order.address}}</p>
        </div>
        <div class="navbar-item">
          <p class="subtitle">Заказ на сумму <b>{{order.total}}</b> сом</p>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button
              class="button is-danger"
              @click="deleteOrder(order)"
            >Удалить</button>
          </div>
          <div class="navbar-item">
            <button
              class="button is-primary"
              @click="confirmOrder(order)"
            >Подтвердить</button>
          </div>
        </div>
      </div>
    </transition-group>

    <h2 class="subtitle">В процессе </h2>
    <transition-group
      name="list"
      tag="div"
    >
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
            <button
              class="button is-warning"
              @click="finishOrder(order)"
            >Выполнен</button>
          </div>
        </div>
      </div>
    </transition-group>
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
  },
  methods: {
    deleteOrder (payload) {
      this.$dialog.confirm({
        title: 'Удаление заказа',
        message: 'Вы уверены что хотите <b>удалить</b> этот заказ? Сперва убедитесь что заказчик отказался либо заказал не правильно!',
        confirmText: 'Удалить заказ',
        cancelText: 'Отмена',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$toast.open({
            message: `Заказ <b> ${payload.name}</b> удалён! `,
            duration: 3000,
            position: 'is-bottom-left',
            type: 'is-dark'
          });
          this.$store.dispatch("deleteOrder", payload)
        }
      })
    },
    confirmOrder (payload) {
      this.$store.dispatch("confirmOrder", payload);
    },
    finishOrder (payload) {
      this.$store.dispatch("finishOrder", payload);
    }
  },
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
