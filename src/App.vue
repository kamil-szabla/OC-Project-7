<template>
  <NavBar/>
  <div class="container">
    <h2 class="text-center d-flex justify-content-center m-3">{{ $route.name }}</h2>
    <router-view :key="$route.fullPath" :postData='postData'/>
  </div>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import axios from 'axios';
import store from '@/store';

export default {
  name: 'App',
  components: { NavBar, Footer },
  data() {
    return  {
      postData: null
    }
  },
  
  async created() {

    // get user details
    if(localStorage.userId){
      const response = await axios.get('http://localhost:3000/api/profile/' + localStorage.getItem('userId'), {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      store.dispatch('user', response.data)

    } else {
      console.log('User not logged in');
    }
    
    // get all posts
    const secResponse = await axios.get('http://localhost:3000/api/post/getPosts', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    this.postData = secResponse.data.slice().reverse();
    store.dispatch('posts', secResponse.data.slice().reverse())
   
    
  },
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
