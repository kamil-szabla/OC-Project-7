<template>
  <div class="home">
    <div class="d-flex justify-content-center mt-5">
      <div v-if="posts.loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import usePosts from '../hooks/usePosts';

export default {
  setup() {
    const posts = usePosts('all');
    
    return {
      posts
    }
  
  }
}
</script>

<style lang="scss">

</style>
