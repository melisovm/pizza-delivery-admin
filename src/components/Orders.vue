<template>
  <div class="container">
    <h1 class="title">Заказы</h1>
    <h2
      class="subtitle"
      v-if="getOrders.length > 0"
    >Активные</h2>

    <div
      class="box navbar "
      v-for="(order, index) in getOrders"
      :key="order._id"
    >
      <div class="navbar-brand navbar-item">
        <p class="subtitle">{{index+1}}</p>
      </div>
      <div class="navbar-item">
        <p
          class="title"
          @click="openModal(order)"
          style="cursor:pointer"
        >{{order.customer_name}}</p>
      </div>
      <div class="navbar-item">
        <p class="subtitle">Заказ на сумму <b>{{order.total_price}}</b> сом</p>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button
            class="button is-warning"
            @click="confirmOrder(order)"
          >Подтвердить</button>
        </div>
        <div class="navbar-item">
          <button
            class="button is-danger"
            @click="deleteOrder(order)"
          >Удалить</button>
        </div>

      </div>
    </div>

    <h2
      class="subtitle"
      v-if="getOrdersInProcess.length > 0"
    >В процессе </h2>
    <div
      class="box navbar"
      v-for="order in getOrdersInProcess"
      :key="order._id"
    >
      <div
        class="navbar-item"
        @click="openModal(order)"
        style="cursor:pointer"
      >
        <p class="title">{{order.customer_name}}</p>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button
            class="button is-warning"
            @click="finishOrder(order)"
          >Выполнен</button>
        </div>
        <div class="navbar-item">
          <button
            class="button is-primary"
            @click="backToActive(order)"
          >Назад в Активные</button>

        </div>
      </div>
    </div>
    <h2
      class="subtitle"
      v-if="getOrdersFinished.length > 0"
    >Завершенные </h2>
    <div
      class="box navbar"
      v-for="order in getOrdersFinished"
      :key="order._id"
    >
      <div
        class="navbar-item"
        @click="openModal(order)"
        style="cursor:pointer"
      >
        <p class="title">{{order.customer_name}}</p>
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
            @click="backToInProcess(order)"
          >Назад в В Процессе</button>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="isModalActive"
      has-modal-card
    >
      <order-info-modal :orderDetails="item"></order-info-modal>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderInfoModal from './OrderInfoModal';


export default {
  components: { OrderInfoModal },
  data () {
    return {
      isModalActive: false,
      item: {}
    }
  },
  computed: {
    ...mapGetters(['getOrders', 'getOrdersInProcess', 'getOrdersFinished'])
  },
  methods: {
    openModal (order) {
      this.isModalActive = true;
      this.item = order;
    },
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
            message: `Заказ <b> ${payload.customer_name}</b> удалён! `,
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
      this.$store.dispatch('changeStatus', payload);
    },
    backToActive (order) {
      this.$store.dispatch('changeStatusActive', order);
    },
    finishOrder (payload) {
      this.$store.dispatch("finishOrder", payload);
    },
    backToInProcess (order) {
      this.$store.dispatch('changeStatus', order)
    }
  },
  mounted () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<style scoped>
</style>
