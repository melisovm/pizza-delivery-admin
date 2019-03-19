<template>
  <div class="container">
    <h1 class="title">Продукты</h1>
    <a
      class="button is-large is-success is-inverted"
      @click="addPage=false"
    > Все продукты </a>
    <a
      class="button is-large is-success is-inverted"
      @click="addPage=true"
    > Добавить продукт </a>

    <all-products v-if="addPage===false"></all-products>
    <add-product v-else></add-product>
  </div>
</template>

<script>
import AllProducts from '../components/AllProducts'
import AddProduct from '../components/AddProduct'



export default {
  data () {
    return {
      addPage: false
    }
  },
  components: {
    AllProducts,
    AddProduct
  },
  methods: {
    mounted () {
      this.$store.dispatch('fetchCategories')
    }
  }
}
</script>

<style>
</style>
