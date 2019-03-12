<template>
  <div class="container">

    <div
      class="columns is-full"
      v-for="(product, index) in products"
      :key="index"
    >
      <div class="column">
        <div class="box navbar">
          <div class="navbar-brand">
            <figure class="image is-64x64">
              <img
                :src="product.image"
                alt=""
              >
            </figure>
          </div>
          <div class="navbar-item">
            <p class="subtitle ">{{product.name}}</p>
          </div>
          <div class="navbar-end navbar-item">
            <button
              class="button is-danger"
              @click="confirmCustomDelete(product)"
            >Удалить</button>

            <button
              class="button is-primary "
              @click="openModal(product)"
            >Изменить</button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="isModalActive"
      has-modal-card
    >
      <modal-form :productDetails="item"></modal-form>
    </b-modal>
    <b-modal
      :active.sync="isDeleteModalActive"
      has-modal-card
    >
    </b-modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ModalForm from './ModalForm'

export default {
  components: { ModalForm },
  data () {
    return {
      isModalActive: false,
      isDeleteModalActive: false,
      item: {}
    }
  },
  props: ['products'],
  methods: {
    openModal (payload) {
      this.item = payload;
      this.isModalActive = true;
    },
    showProduct (payload) {
      console.log(payload);
    },
    ...mapActions(['deleteProduct']),
    remove (payload) {
      this.deleteProduct(payload);
    },
    confirmCustomDelete (payload) {
      this.item = payload;
      this.$dialog.confirm({
        title: 'Удаление продукта',
        message: 'Вы уверены что хотите  <b>удалить</b> этот продукт? После Вы не можете восстановить данные',
        confirmText: 'Удалить продукт',
        cancelText: 'Отмена',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$toast.open({
            message: 'Продукт удалён! ',
            duration: 3000,
            position: 'is-bottom-left',
            type: 'is-dark'
          });
          this.remove(payload);
        }
      })
    }
  }
}
</script>

<style scoped>
.navbar-end > .button {
  margin: 0 0 0 0.5rem;
}
</style>
