import { createRouter, createWebHistory } from 'vue-router'
import AppSimple from '../views/AppSimple.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppSimple
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

