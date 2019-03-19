<template>
  <div class="container">
    <h1 class="title">Категории</h1>

    <a
      class="button is-large is-success is-inverted"
      @click="addPage=false"
    > Все категории </a>
    <a
      class="button is-large is-success is-inverted"
      @click="addPage=true"
    > Добавить категорию </a>
    <div v-if="addPage===true">
      <h2 class="subtitle">Добавление категории</h2>
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
    <div v-else>
      <h2 class="subtitle">Все категории</h2>
      <list-of-categories :categories="getCategories"></list-of-categories>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ListOfCategories from './ListOfCategories';

export default {
  data () {
    return {
      addPage: false,
      categoryName: '',
      categoryCode: ''
    }
  },
  components: {
    ListOfCategories
  },
  computed: {
    ...mapGetters(['getCategories'])
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
  mounted () {
    this.$store.dispatch('fetchCategories')
  },
}
</script>

<style>
</style>
