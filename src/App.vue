<template>
<nav class="navbar navbar-light bg-light fixed navbar-expand-lg">
  <div class="container-fluid">
    <div>
      <router-link to="/">
        <img src="./assets/icon-left-font-monochrome-black.svg" alt="Logo Grupomania" width="200" height="50" class="navbar-brand align-top">
      </router-link>
    </div>
    <form class="d-flex ">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-secondary" type="submit">Search</button>
    </form>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <router-link to="/login" class="btn btn-outline-primary" role="button">Log In</router-link>
      <router-link to="/signup" class="btn btn-primary" role="button">Sign Up</router-link>
    </div>
  </div>
</nav>
<router-view class="container"/>
</template>

<script setup>
import API from './lib/API'


async function getPosts() {

  const data = await API.getPosts('aww');
  console.log(data)
}
getPosts();


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin: 50px 5%; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
