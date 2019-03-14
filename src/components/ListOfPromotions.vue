<template>
  <div class="container">
    <h1 class="title">Список всех акций/новостей</h1>
    <div style="margin-top:3rem">
      <div
        class="columns "
        v-for="(promotion, index) in promotions"
        :key="index"
      >
        <div class="column">
          <div class="box navbar">
            <div
              class="navbar-brand"
              style="margin-right:1rem"
            >
              <figure class="image is-64x64">
                <img :src="promotion.image">
              </figure>
            </div>
            <div class="navbar-item">
              <p class="subtitle"><b>{{promotion.name}}</b></p>
            </div>
            <div class="navbar-end navbar-item">
              <button
                class="button is-danger"
                @click="confirmDelete(promotion)"
              >Удалить</button>
              <button
                class="button is-primary"
                @click="openModal(promotion)"
              >Изменить</button>
            </div>
          </div>
        </div>
      </div>
      <b-modal
        :active.sync="isActiveModal"
        has-modal-card
      >
        <promotion-modal :promotionDetails="data"></promotion-modal>
      </b-modal>
    </div>
  </div>
</template>

<script>
import PromotionModal from './PromotionModal'

export default {
  data () {
    return {
      isActiveModal: false,
      data: {}
    }
  },
  props: ['promotions'],
  components: {
    PromotionModal
  },
  methods: {
    openModal (payload) {
      this.data = payload;
      this.isActiveModal = true;
    },
    confirmDelete (payload) {
      this.item = payload;
      this.$dialog.confirm({
        title: 'Удаление акции',
        message: 'Вы уверены что хотите <b>удалить</b> эту акцию? После Вы не можете восстановить данные',
        confirmText: 'Удалить акцию',
        cancelText: 'Отмена',
        type: 'is-primary',
        hasIcon: true,
        onConfirm: () => {
          this.$toast.open({
            message: `Акция "${payload.name}" удалена`,
            duration: 3000,
            position: 'is-bottom-left',
            type: 'is-danger'
          })
          this.$store.dispatch("deletePromotion", payload);
        }
      })
    }
  }
}
</script>

<style scoped>
h1.title {
  margin: 1rem 0 0.5rem 0;
}
.navbar-end > .button {
  margin: 0 0 0 0.5rem;
}
.columns {
}
</style>
