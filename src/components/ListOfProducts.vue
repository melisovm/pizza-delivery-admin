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
              class="button is-danger "
              @click="remove(product)"
            >Удалить</button>

            <button
              class="button is-primary "
              @click="isModalActive = true"
            >Изменить</button>
          </div>
        </div>
      </div>
      <b-modal
        :active.sync="isModalActive"
        has-modal-card
      >
        <modal-form :productDetails="product"></modal-form>
      </b-modal>
    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ModalForm from './ModalForm'

export default {
  components: { ModalForm },
  data () {
    return {
      isModalActive: false
    }
  },
  props: ['products'],
  methods: {
    ...mapActions(['deleteProduct']),
    remove (index) {
      this.deleteProduct(index);
    }
  }
}
</script>

<style scoped>
.navbar-end > .button {
  margin: 0 0 0 0.5rem;
}
</style>
