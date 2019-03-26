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
              <img :src="getImageUrl(product.image)">
            </figure>
          </div>
          <div class="navbar-item">
            <p class="subtitle ">{{product.name}}</p>
          </div>
          <div class="navbar-end navbar-item">
            <button
              class="button is-danger"
              @click="confirmDelete(product)"
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
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import ModalForm from './ModalForm'

export default {
  components: { ModalForm },
  props: ['products'],
  data () {
    return {
      isModalActive: false,
      item: {},
    }
  },
  computed: {
    ...mapState(['defaultUrl']),
    ...mapGetters(['getCategories'])
  },

  methods: {
    ...mapActions(['deleteProduct']),
    openModal (payload) {
      this.item = payload;
      this.isModalActive = true;

    },
    getImageUrl (ImageName) {
      return this.defaultUrl + '/image/' + ImageName;
    },
    confirmDelete (payload) {
      this.item = payload;
      this.$dialog.confirm({
        title: 'Удаление продукта',
        message: 'Вы уверены что хотите <b>удалить</b> этот продукт? После Вы не можете восстановить данные',
        confirmText: 'Удалить продукт',
        cancelText: 'Отмена',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$toast.open({
            message: `Продукт "${payload.name}" удалён! `,
            duration: 3000,
            position: 'is-bottom-left',
            type: 'is-dark'
          });
          this.deleteProduct(payload);
        }
      })
    }
  },
  mounted () {

  },
}
</script>

<style scoped>
.navbar-end > .button {
  margin: 0 0 0 0.5rem;
}
</style>
