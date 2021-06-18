<template>
<nav class="navbar navbar-light bg-light fixed navbar-expand-lg" >
  <div class="container-fluid">
    <div>
      <router-link to="/">
        <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Grupomania" width="200" height="50" class="navbar-brand align-top" id="navbar-logo">
      </router-link>
    </div>
    <div class="d-inline gap-2 d-flex justify-content-sm-end">
      <router-link to="/login" class="btn btn-outline-primary" role="button" v-show="!user">Log In</router-link>
      <router-link to="/signup" class="btn btn-primary" role="button" v-show="!user">Sign Up</router-link>
      <router-link to="/profile"
     class="btn btn-primary btn-sm" role="button" v-show="user"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> </router-link>
      <router-link to="/create" class="btn btn-primary btn-sm" role="button" v-show="user">Create Post</router-link>
      <router-link to="/" class="btn btn-outline-primary btn-sm" role="button" v-show="user" @click='logOut'>Log Out</router-link>
    </div>
  </div>
</nav>
</template>

<script>
import router from '@/router'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['user'])
  },

  setup() {

    
    function logOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('username');

      store.dispatch('user', null)
      router.push('/login')
    }
   
    return {
      logOut,
    }
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#navbar-logo {
  width: 150px;
  
}
@media screen and (max-width: 440px){
  #navbar-logo {
    width: 100px;
  }    
}
</style>
