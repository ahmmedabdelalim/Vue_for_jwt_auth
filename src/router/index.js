import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {

  // here if i not have token dont got to the any pages and redirect to login page

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('api_token') == null) {
      next({
        path:  "/Login",
        query: { redirect: to.fullPath },
      })
    } else {
      next();
    }
  }

  
/////////////////////////////////////

  // if i have token dont go to login page  or register page && redirect backe  to profile or any page
  else if (to.matched.some(record => record.meta.guest)) {

    if (localStorage.getItem('api_token') == null) {
      next(); // next here means the next stage avalible
    } else {
      next({
        path:  "/Profile",
        query: { redirect: to.fullPath },
      });
    }

  }
  
  else {
    next(); // make sure to always call next()!
  }
});



 

  export default router; // very important to call const and call router in here 

