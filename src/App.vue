<template>
  <NavBar />
  <div class="container">
    <h2 class="text-center d-flex justify-content-center m-3">{{ $route.name }}</h2>
    <router-view class="" v-model="name" />
  </div>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { NavBar, Footer }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
