<template>
  <footer class="bg-light static-bottom p-3 text-center">
    <p>  {{ copyrights }}  </p>  
  </footer>  
</template>

<script>
import {computed, ref} from "vue";
export default {
  name: 'Footer',
  components: 'Footer',
  setup() {
    const creator = 'Kamil Szabla';
    const companyName = 'Groupomania';
    const year = ref(new Date().getFullYear());
    
    const copyrights = computed(() => {
      return (companyName +  ' ©	 ' + year.value + ' created by ' +  creator)
    });

    return {
      copyrights
    }
  }

}
</script>

<style>
</style>