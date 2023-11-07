import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import addReminderView from '@/views/AddReminderView.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import LogOut from '@/components/LogOut.vue'
import ResetPassword from '@/components/ResetPassword.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },

  {
    path: '/addReminderView',
    name: 'addReminderView',
    component: addReminderView
  },

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },

  {
    path: '/logout',
    name: 'LogOut',
    component: LogOut
  },

  {
    path: '/reset',
    name: 'ResetPassword',
    component: ResetPassword
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router