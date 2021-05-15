<template>
<div>
  <div class="wrapper fadeInDown d-flex justify-content-center">
    <div id="formContent">
      <div class="fadeIn first">
        <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Grupomania" width="200" height="60" class="navbar-brand align-top">
      </div>
      <form @submit.prevent='createAccount'>
        <input type="text" id="email" class="fadeIn second" name="login" placeholder="Email" v-model="email">
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login" v-model="username">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Repeat password" v-model="password">
        <input type="submit" class="fadeIn fourth btn btn-primary" value="Create account">
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    setup() {
      let email, username, password = '';
      let isLoggedIn = false

      function createAccount() {
        axios.post('http://localhost:3000/api/signup', {
          username: this.username, email: this.email, password: this.password
        }).then((response) => {
          // this.isLoggedIn = true;
          console.log(response)
        })
      }

      return {
        username,
        email,
        password,
        createAccount,
        isLoggedIn
      }

    },
}
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
}
</style>