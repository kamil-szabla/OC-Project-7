<template>
  <div class="main">
    <div class="jumbotron jumbotron-fluid border rounded p-3 d-flex">
      <div class="container">
        <h5 class="display-7 m-1" v-html="posts[$route.params.id].body"> </h5>
        <div :class="(posts[$route.params.id].image ? 'mb-3' : '')">
        </div>
        <figure v-if="posts[$route.params.id].image" class="">
          <img 
          :src="posts[$route.params.id].image.url" 
          :alt="posts[$route.params.id].image.alt"
          class="w-50 mx-auto rounded d-block img-thumbnail"
          style="max-height: 600px">
        </figure>
      </div>
      <!-- <figure class="figure text-center m-3">
        <img :src="posts[$route.params.id].author.profile_img_url" alt="Image" class="figure-img img-fluid rounded-circle" id="profile-image">
        <div class="post-author">
          <h5 class="font-weight-bold">
            {{ posts[$route.params.id].author.display_name }} 
          </h5>
          <h6 class="text-muted">
            {{ posts.id.author.username }}
          </h6>
        </div>
      </figure> -->
    </div>

    <!-- <div class="form-group m-3 mt-5 d-flex">
      <input class="form-control m-2" id="commentArea" rows="6" columns='6' placeholder="Write a comment...">
      <button type="submit" class="btn btn-primary m-2">Post</button>
    </div>
    <h3 class="d-inline-block">Comments:</h3>
    <Comments 
    v-for="post in posts" 
    :key='post._id.stats' 
    :post='post' /> -->
    
  <div>{{ commentsInfo }}</div>
  </div>
  
</template>

<script>
import { ref } from 'vue';
import vposts from '../vposts';
import Comments from '../components/Comments'
import axios from 'axios';

export default {
setup() {
    const posts = ref(vposts);
    const commentsInfo = '';

    async function getComments() {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        console.log(response)
        console.log(response.data)
        console.log(commentsInfo)
        this.commentsInfo = response.data;
      } catch (error) {
        console.log(error)
      }
    }
    getComments();
    
    return {
      posts,
      Comments,
      getComments,
      
    }
  }
}
</script>

<style>
.main {
  min-height: 100vh;
}
</style>