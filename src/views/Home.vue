<template>
  <div class="home">
    
    <h2 v-if="!user" class="text-center">You are not logged in!</h2>
    
    <div v-if="user">
      <Post 
      v-for="post in postData" 
      :key='post.id + 1'
      :post='post'
      :postData='postData'
      :user='user'
      :seenPosts='seenPosts'/>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Post from '../components/Post';
import axios from 'axios'


export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      postData: null,
      seenPosts: []
    }
  },
  methods: {
    // get all seen posts
    async getSeenPosts() {
      axios.post('http://localhost:3000/api/post/visited', {
        'userId': localStorage.userId
      }).then((res) => {
        console.log(res.data);
        this.seenPosts= res.data.map(a => a.postId)
        console.log(this.seenPosts);
      }).catch((err) => {
        console.log(err);
      })
    }
  },

  async created() {
    // get all posts
    const response = await axios.get('http://localhost:3000/api/post/getPosts', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    this.postData = response.data.slice().reverse();

    console.log(this.postData);
  },
   setup() {


    return {

      Post,
    }
  },
  beforeMount() {
    this.getSeenPosts()
  },
}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
}
</style>
