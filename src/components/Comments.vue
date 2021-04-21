<template>
  <p class="font-weight-bold">
    {{ post.stats.comments }} 
  </p>
</template>

<script>
// import { ref } from 'vue';
// import vposts from '../vposts';

export default {
props: ['post']
}
</script>

<style>

</style>