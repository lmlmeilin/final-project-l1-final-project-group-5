import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import addReminderView from '@/views/AddReminderView.vue'
import Login from '@/components/Login.vue'

const routes = [
  {
    path: '/',
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
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router