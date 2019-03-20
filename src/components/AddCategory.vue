<template>
  <div class="container">
    <h2 class="title">Добавление категории</h2>
    <div class="field is-horizontal">
      <div class="field-label">

        <label for="product_category">
          <p class="subtitle"> Имя Категории</p>
        </label>
      </div>
      <div class="field-body">
        <input
          v-model="categoryName"
          type="text"
          class="input is-success sameWidth"
          style="width:50rem"
        >
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">

        <label for="product_category">
          <p class="subtitle"> Код категории</p>
        </label>
      </div>
      <div class="field-body">
        <input
          v-model="categoryCode"
          type="text"
          class="input is-success sameWidth"
          style="width:50rem"
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
          @click="addCategory()"
        ></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categoryName: '',
      categoryCode: ''
    }
  },
  methods: {
    addCategory () {
      const category = {
        name: this.categoryName,
        code: this.categoryCode
      }
      let formData = new FormData();
      for (let key in category) {
        formData.append(key, category[key]);
      }
      this.$store.dispatch('addCategory', formData);
      console.log(formData);
    }
  },

}
</script>
<style scoped>
</style>