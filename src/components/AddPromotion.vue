<template>
  <div class="container">
    <h1 class="title">Добавление акции/новостей</h1>
    <form v-on:submit.prevent="addPromotion">
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Наименование акции(новости)</p>
        </div>
        <div class="field-body">
          <input
            type="text"
            class="input is-success sameWidth"
            placeholder=""
            v-model="promotion_name"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Описание акции(новости)</p>
        </div>
        <div class="field-body">
          <textarea
            v-model="promotion_description"
            cols="30"
            rows="10"
            class="textarea is-success sameWidth"
          ></textarea>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Ссылка на картину акции(новости)</p>
        </div>
        <div class="field-body">
          <input
            type="text"
            class="input is-success sameWidth"
            v-model="promotion_image"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <input
            class="button is-success is-rounded"
            type="submit"
            value="Добавить"
          ></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      promotion_name: '',
      promotion_description: '',
      promotion_image: ''
    }
  },
  methods: {
    addPromotion () {
      const promotion = {
        name: this.promotion_name,
        description: this.promotion_description,
        image: this.promotion_image
      }
      this.$store.dispatch('addPromotion', promotion);
    }
  }
}
</script>

<style scoped>
.sameWidth {
  width: 50rem;
}
</style>
