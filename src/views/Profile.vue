<template>
  <h2 v-if="!user" class="text-center profile">You are not logged in!</h2>

  <div class="container profile" v-if="userInfo">
    <div class="row">
      <div class="">
        <div class="well well-sm mb-4">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <img :src="userInfo.image" alt="" class="img-rounded img-responsive" />
            </div>
            <div class="col-sm-6 col-md-8">
              <h4>Login: {{userInfo.username}}</h4>
              <p>Email: {{userInfo.email}}
              <br />
              Account created at: {{ date(userInfo.created_at) }}</p>
            <button type="button" class="btn btn-danger" @click.prevent="deleteAccount">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  setup() {
    function date(d) {
      return moment(d).format("MMM Do YYYY")
    }
    function deleteAccount() {
      axios.delete('http://localhost:3000/api/deleteProfile/' + localStorage.userId, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');

        store.dispatch('user', null)
        router.push('/login')
        alert('Account deleted!')
      })
    }
    return {
      date,
      deleteAccount
    }

  },
  data() {
    return {
      userInfo: null,

    }
  },

  async beforeCreate() {
    // get user info
    let response = await axios.get('http://localhost:3000/api/profile/' + localStorage.userId, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      this.userInfo = (response.data.data[0]);      
  },
}
</script>

<style lang="scss">
.profile {
  min-height: 100vh;
}
  
</style>