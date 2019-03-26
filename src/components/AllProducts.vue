<template>
  <div class="container">
    <div
      v-for="category in getCategories"
      :key="category._id"
    >
      <h2
        class="title"
        v-if="getCategoryProducts(category.code).length>0"
      >{{category.name}}</h2>
      <list-of-products :products="getCategoryProducts(category.code)"></list-of-products>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  computed: {
    ...mapGetters(['getCategories', 'getCategoryProducts']),
  },
  components: {
    listOfProducts
  },
  mounted () {
    this.$store.dispatch('fetchProduct');
  }

}
</script>

<style scoped>
.subtitle {
  padding-top: 2rem;
  font-weight: bold;
}
</style>
