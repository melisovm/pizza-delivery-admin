<template>
  <div class="container">
    <h1 class="title">Акции</h1>
    <a
      class="button is-large is-success is-inverted"
      @click="addPage=false"
    > Все акции </a>
    <a
      class="button is-large is-success is-inverted"
      @click="addPage=true"
    > Добавить акцию </a>
    <add-promotion v-if="addPage===true"></add-promotion>
    <all-promotions v-else></all-promotions>
  </div>
</template>

<script>
import AddPromotion from '../components/AddPromotion'
import AllPromotions from '../components/AllPromotions'


export default {
  data () {
    return {
      addPage: false
    }
  },
  components: {
    AddPromotion, AllPromotions
  }
}
</script>

<style>
</style>
