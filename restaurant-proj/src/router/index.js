import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "../components/signup.vue"
import HomeView from "../views/HomeView.vue"
import Login from "../components/Login.vue"
import Add from "../components/Add.vue"
import Update from "../components/Update.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})

export default router
