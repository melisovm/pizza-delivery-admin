<template>
  <div class="container">
    <h1 class="title">Все продукты</h1>
    <h2 class="subtitle">Пиццы</h2>
    <list-of-products :products="getPizzas"></list-of-products>
    <h2 class="subtitle">Комбо</h2>
    <list-of-products :products="getCombos"></list-of-products>
    <h2 class="subtitle">Напитки</h2>
    <list-of-products :products="getDrinks"></list-of-products>
    <h2 class="subtitle">Дессерты</h2>
    <list-of-products :products="getDesserts">
    </list-of-products>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  computed: {
    ...mapGetters(['getPizzas', 'getDesserts', 'getDrinks', 'getCombos'])
  },
  components: {
    listOfProducts
  },

}
</script>

<style scoped>
.subtitle {
  padding-top: 2rem;
  font-weight: bold;
}
</style>
