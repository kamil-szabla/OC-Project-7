import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    posts: null,
  },

  getters: {
    user: (state) => {
      return state.user
    },
    posts: (state) => {
      return state.posts
    }
  },

  mutations: {
    user(state, user) {
      state.user = user
    },
    posts(state, posts) {
      state.posts = posts 
    }
  },

  actions: {
    user(context, user) {
      context.commit('user', user)
    },
    posts(context, posts) {
      context.commit('posts', posts)
    }
  },

  modules: {
  }
})
