import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
