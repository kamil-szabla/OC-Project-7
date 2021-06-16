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
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Repeat password" v-model="confirmpassword">
        <input type="submit" class="fadeIn fourth btn btn-primary btn-sm" value="Create account">
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  
    setup() {
      let email, username, password, confirmpassword = '';
      let isLoggedIn = false

      function createAccount() {
        if (this.password !== this.confirmpassword || this.password == '') {
        window.alert('Passwords are not matching or are empty, try again')
      } else {
        axios.post('http://localhost:3000/api/signup', {
          username: this.username, email: this.email, password: this.password
        }).then((response) => {
          console.log(response)
          alert('Account created successfully')
          router.push('/login')
        }).catch((err) => {
          alert(err)
        })
        }
      }

      return {
        username,
        email,
        confirmpassword,
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