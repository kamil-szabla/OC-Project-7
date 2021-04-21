<template>
  <article class="post p-2 mb-5 border">
    <router-link 
    :to="{ name: 'SinglePost', params: { id: post._id }}"
    class="d-flex p-2">
      <figure class="figure text-center m-3">
        <img :src="post.author.profile_img_url" 
        class="figure-img img-fluid rounded-circle" 
        alt="Image" 
        id="profile-image">
        <div class="post-author">
          <h5 class="font-weight-bold">
            {{ post.author.display_name }} 
          </h5>
          <h6 class="text-muted">
            {{ post.author.username }}
          </h6>
        </div>
      </figure>

      <div class="">
        <div :class="(post.image ? 'mb-3' : '')">
          <p class="text-muted" v-html="post.body"> </p>
        </div>

        <figure 
        v-if="post.image" 
        class="rounded border-gray overflow-hidden justify-content-center d-flex">
          <img 
          :src="post.image.url" 
          :alt="post.image.alt"
          class="w-50 mx-auto rounded d-block img-thumbnail">
        </figure>

      </div>
    </router-link>
  </article>


</template>

<script>
export default {
  props: ['post']
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
// img {
//   width: 120px;
// }
#profile-image {
  width: 5em;
}
</style>