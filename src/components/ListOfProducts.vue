<template>
  <div class="container">

    <div class="columns is-full">
      <div class="column">
        <div
          class="cards"
          v-for="(product, index) in products"
          :key="index"
        >
          <h1>{{product.name}}</h1>
        </div>
      </div>
    </div>

  </div>
</template>
<script>


export default {
  props: ['products'],

}
</script>

<style>
</style>
