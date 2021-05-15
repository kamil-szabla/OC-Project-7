<template>
  <div class="home">
    <Post 
    v-for="post in posts" 
    :key='post._id' 
    :post='post' />
  </div>
</template>

<script>
import { ref } from 'vue';
import Post from '../components/Post';
import vposts from '../vposts';

export default {
  setup() {
    const posts = ref(vposts);

   

    return {
      posts,
      Post
    }
  }
}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
}
</style>
