<template>
  <div class="container">
    <h2 class="title">Все категории</h2>
    <div
      class="columns is-full"
      v-for="(category, index) in getCategories"
      :key="index"
    >
      <div class="column">
        <div class="box navbar">
          <div class="navbar-item">
            <p class="subtitle ">Имя категории: {{category.name}}</p>
          </div>
          <div class="navbar-item">
            <p class="subtitle ">Код категории: {{category.code}}</p>
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
  data () {
    return {
      isModalActive: false,
      item: {}
    }
  },
  computed: {
    ...mapGetters(['getCategories'])
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
        title: 'Удаление категории',
        message: 'Вы уверены что хотите <b>удалить</b> эту категорию? После Вы не можете восстановить данные',
        confirmText: 'Удалить категорию',
        cancelText: 'Отмена',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$toast.open({
            message: `Категория <b>${payload.name}</b> удалён! `,
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
