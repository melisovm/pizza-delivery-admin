<template>
  <div class="main">
    <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <img
          src="../assets/logo.png"
          alt=""
          class="nav-logo"
        >
        <h3 class="nav-title "> Admin Page</h3>
      </div>
      <div class="navbar-item">
        <router-link
          to="/product-add"
          class="button is-success is-rounded"
        >Добавить продукт</router-link>
        <router-link
          to="promotion-add"
          class="button is-success is-rounded"
        > Добавить Акцию/Новость</router-link>
        <router-link
          to="all-products"
          class="button is-success is-rounded"
        > Список всех продуктов</router-link>
      </div>
      <div class="navbar-end">
        <!-- Add smthg to the end -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  align-items: center;
}
.nav-logo {
  max-height: 2em;
  margin: 0.5em 0 0.5em 0.5em;
}
.nav-title {
  margin: 1em;
  font-size: 1em;
  font-weight: 800;
}
</style>
