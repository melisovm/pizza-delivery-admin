<template>
  <list-of-promotions :promotions="getPromotions"></list-of-promotions>
</template>

<script>
import ListOfPromotions from './ListOfPromotions'
import { mapGetters } from 'vuex';

export default {
  data () {
    return {

    }
  },
  components: {
    ListOfPromotions
  },
  computed: {
    ...mapGetters(['getPromotions']),

  },
  methods: {

  },
  mounted () {
    this.$store.dispatch('fetchPromotions');
  }
}
</script>

<style>
</style>
