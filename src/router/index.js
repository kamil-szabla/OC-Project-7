import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import SinglePost from "../views/SinglePost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/post/:id",
    name: "SinglePost",
    component: SinglePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
