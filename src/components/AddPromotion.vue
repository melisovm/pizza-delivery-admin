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
            required
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
            required
            v-model="promotion_description"
            cols="30"
            rows="10"
            class="input is-success sameWidth"
            style="height:10rem"
          ></textarea>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Ссылка на картину акции(новости)</p>
        </div>
        <div class="field-body">
          <input
            type="file"
            :required="true"
            accept="image/*"
            ref="file"
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
    }
  },
  methods: {
    addPromotion () {
      const promotion = {
        name: this.promotion_name,
        description: this.promotion_description,
      }
      console.log(promotion);
      let formData = new FormData();
      let file = this.$refs.file.files[0];
      formData.append('image', file);
      for (let key in promotion) {
        formData.append(key, promotion[key])
      }
      this.$store.dispatch('addPromotion', formData);
      this.$toast.open({
        message: ' Акция добавлена ',
        duration: 3000,
        position: 'is-bottom-right',
        type: 'is-primary'
      })
    }
  }
}
</script>

<style scoped>
.sameWidth {
  width: 50rem;
}
</style>
