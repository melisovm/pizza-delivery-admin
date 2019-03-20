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
      <add-category></add-category>
    </div>
    <div v-else>

      <list-of-categories></list-of-categories>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ListOfCategories from './ListOfCategories';
import AddCategory from './AddCategory';

export default {
  data () {
    return {
      addPage: false,

    }
  },
  components: {
    ListOfCategories,
    AddCategory
  },
  methods: {

  },
  mounted () {
    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style>
</style>
