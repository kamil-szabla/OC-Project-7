<template>
  <div class="main">
    <h2 v-if="!user" class="text-center">You are not logged in!</h2>
    <div class=" border rounded p-3 d-flex h-70" v-if="user" id="singlePost">
      <div class="container" v-if="post">

        <h3 class="display-7 m-1 text-center" v-html="post[0].title"></h3> <hr>
        <img 
        :src="post[0].media" 
        :alt="post[0].title"
        class="mx-auto  d-block">
        <hr>
        
        <p v-html="post[0].text" class="text"></p>

        <div class="d-inline-block w-100">
      <div class="footer text-muted text-end">
        Added {{ date(post[0].createdAt) }} by {{ post[0].createdBy }}
      </div>
    </div>

      </div>
      
    </div>


    <form class="form-group m-3 mt-5 d-flex" @submit.prevent="addComment">
      <input class="form-control m-2" id="commentArea" rows="6" columns='6' placeholder="Write a comment..." v-model="comment">
      <button type="submit" class="btn btn-primary m-2" >Add Comment</button>
    </form>
    <h3 class="d-inline-block">Comments:</h3>
    <Comments
    v-for="comment in comments" 
    :key='comment.id'
    :comment='comment' />
    
  </div>
  
</template>

<script>
import { ref } from 'vue';
import Comments from '../components/Comments'
import { mapGetters } from 'vuex'
import axios from 'axios'
import moment from 'moment';
import router from '@/router'

export default {
  props: ['postData'],
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      post: ref(null),
      comments: ref(null)
    }
  },
  async beforeCreate() {
    // get post 
    let postID = window.location.href.slice(-1)
    const response = await axios.get('http://localhost:3000/api/post/singlePost/' + this.$route.params.id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    this.post = (response.data.data)
    // get comments
    await axios.get('http://localhost:3000/api/post/postComments/' + postID, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => {
      this.comments = response.data.data.slice().reverse();
    })
    // mark as seen
    axios.post('http://localhost:3000/api/post/seen', {
      postId: postID, userId: localStorage.userId
    }).then((response) => {
      console.log(response);
    })

  },
   
  setup() {
    let comment = '';

    function date(d) {
    return moment(d).fromNow()
  }


    let postID = window.location.href.slice(-1)

    function addComment() {
      const createdBy = localStorage.getItem('username');
      axios.post('http://localhost:3000/api/post/commentPost', {
        text: this.comment, createdBy: createdBy, postId: postID
      }).then((response) => {
        console.log(response);
        console.log(this.comment)
        router.go()
      }).catch((err) => {
        console.log(err);
      })
    }

    return {

      Comments,
      date,
      addComment,
      comment,
    }
  }
}
</script>

<style>
.main {
  min-height: 100vh;
}

img {
  max-height: 70vh;
  max-width: 100%;
}
</style>