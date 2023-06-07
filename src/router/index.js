import { createRouter, createWebHistory } from 'vue-router'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/arbiters/:id?',
    name: 'Arbiters',
    alias: ['/arbiters'],
    component: () => import('../views/Arbiters.vue')
  },
  {
    path: '/edit/:token',
    name: 'Arbiter edit',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/guide',
    name: 'User Guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/arb-guide',
    name: 'Arbiter Guide',
    component: () => import('../views/Arb-guide.vue')
  },
  {
    path: '/fiat-in-out',
    name: 'In / Out',
    component: () => import('../views/Fiat-in-out.vue')
  },
  {
    path: '/partners',
    name: 'For Partners',
    component: () => import('../views/Partners.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/privacy',
    component: PrivacyPolicy
  },

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {

    if (to.hash) {
      //return {selector: to.hash}
      //Or for Vue 3:

      return {el: to.hash, top: 100,}
    }
  }

})

export default router
