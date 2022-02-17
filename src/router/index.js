import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/arbiters',
    name: 'Arbiters',
    component: () => import('../views/Arbiters.vue')
  },
  {
    path: '/arbiters/:id',
    name: 'Arbiters id',
    component: () => import('../views/Arbiters.vue')
  },
  {
    path: '/arbiter/:token',
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
    name: 'Arbiters Guide',
    component: () => import('../views/Arb-guide.vue')
  },
  {
    path: '/gbytes',
    name: 'Get Gbytes',
    component: () => import('../views/Get-gbytes.vue')
  },
  {
    path: '/partners',
    name: 'For Partners',
    component: () => import('../views/For-partners.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
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
