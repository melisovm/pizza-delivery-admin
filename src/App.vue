<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar
  },
}
</script>

<style>
</style>
