<template>
  <div class="container">

    <div
      class="columns is-full"
      v-for="(category, index) in categories"
      :key="index"
    >
      <div class="column">
        <div class="box navbar">
          <div class="navbar-item">
            <p class="subtitle ">Имя: {{category.name}}</p>
          </div>
          <div class="navbar-item">
            <p class="subtitle ">Код: {{category.code}}</p>
          </div>
          <div class="navbar-end navbar-item">
            <button
              class="button is-danger"
              @click="confirmDelete(category)"
            >Удалить</button>

            <button
              class="button is-primary "
              @click="openModal(category)"
            >Изменить</button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="isModalActive"
      has-modal-card
    >
      <category-modal-form :categoryDetails="item"></category-modal-form>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import CategoryModalForm from './CategoryModalForm'

export default {
  components: { CategoryModalForm },
  props: ['categories'],
  data () {
    return {
      isModalActive: false,
      item: {}
    }
  },
  methods: {
    ...mapActions(['deleteCategory']),
    openModal (payload) {
      this.item = payload;
      this.isModalActive = true;
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
            message: `Продукт <b>${payload.name}</b> удалён! `,
            duration: 3000,
            position: 'is-bottom-left',
            type: 'is-dark'
          });
          //delete function
          this.deleteCategory(payload);
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
