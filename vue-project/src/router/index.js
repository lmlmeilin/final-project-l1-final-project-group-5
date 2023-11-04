import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import addReminder from '@/views/AddReminder.vue'

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
    path: '/addReminder',
    name: 'addReminder',
    component: addReminder
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router