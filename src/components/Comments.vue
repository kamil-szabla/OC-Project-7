<template>
<div class="container mt-2 mb-2" v-if="user">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            
            <div class="card p-3 m-1">
                <div class="d-block">
                  <div class="">

                      <p class="fw-bold  mr-2">{{ comment.createdBy }}</p> 
                  </div>
                    <div class="user d-flex flex-row align-items-center"> 
                      <p class="font-weight-bolder">{{ comment.text }} </p> 
                    </div> 
                    <small>{{date(comment.created_at)}} </small>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex'

export default {
props: ['comment'],
  computed: {
    ...mapGetters(['user'])
  },
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

<style>

.comment {
    border: 1px solid rgba(16, 46, 46, 1);
    float: left;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px
}

</style>