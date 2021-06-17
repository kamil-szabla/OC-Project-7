<template>
<div>
  <div class="wrapper d-flex justify-content-center ">
    <div id="formContent">
      <div class="fadeIn first">
        <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Grupomania" width="200" height="60" class="navbar-brand align-top">
      </div>
      <form @submit.prevent="logIn">
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login" v-model="username">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
        <input type="submit" class="fadeIn fourth btn btn-primary" value="Log In">
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import store from '@/store'


export default {
  setup() {
    let username, password = '';

    async function logIn() {
      await axios.post('http://localhost:3000/api/login',
        {
        username: this.username,
        password: this.password
        },
        { headers:
          {
            'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        if(response.data.status === 200) {

          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId.id);
          localStorage.setItem('username', response.data.userId.username);

          store.dispatch('user', response.data)
          router.push('/')
        } else if(response.data.status !== 200) {
          alert(response.data.message)
        }
      }).catch((error) => {
        alert(error)
        console.log(error)
      })
    }
  
    return {
      username,
      password,
      logIn
    }
  }
}
</script>

<style lang="scss">

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  margin-top: -160px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}


/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #0d6efd;
  border: none;
  color: white;
  padding: 15px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #0d6efd;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text], input[type=password],input[type=email] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
  background-color: #fff;
  border-bottom: 2px solid #0d6efd;
}

input[type=text]:placeholder, input[type=password]:placeholder, input[type=email]:placeholder {
  color: #cccccc;
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}
/* OTHERS */

*:focus {
    outline: none;
} 

</style>

