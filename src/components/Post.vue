<template>
  <article class="post p-2 mb-5 border">
    
    <router-link 
    :to="{ name: 'SinglePost', params: { id: (post.id)   }}"
    :post='post'>

    <div class="singlePost">
      <div :class="(post.media ? 'mb-3' : '')">
        <h4 class="text-uppercase text-center">{{post.title}} <span class="badge bg-primary" v-if="!seenPosts.includes(post.id)">New</span>

        </h4>
      </div>
        <img 
        :src="post.media"
        alt="post.image.alt"
        class="mx-auto rounded d-block mb-4">
    </div>

    <div class="d-inline-block w-100">
      <div class="footer text-muted text-end">
        Added {{ date(post.createdAt) }} by {{ post.createdBy }}
      </div>
    </div>
    </router-link>
  </article>


</template>

<script>
import moment from 'moment';
export default {
  props: ['post', 'seenPosts'],
  
  setup() {
    function date(d) {
    return moment(d).fromNow()
  }

    return {
      date
    }
  }
}
</script>

<style lang="scss">

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
}

img {
  max-height: 70vh;
  max-width: 100%;
}
</style>