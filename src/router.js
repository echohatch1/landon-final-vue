import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Favorites from "./views/Favorites.vue";

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'app',
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites
    }
  ]
});