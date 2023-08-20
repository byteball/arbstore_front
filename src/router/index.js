import { createRouter, createWebHistory } from 'vue-router'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'
import CodeOfConduct from '../views/CodeOfConduct.vue'
import ListingCriteria from '../views/ListingCriteria.vue'
import HowGetUSDC from '../views/HowGetUSDC.vue'

const prefix = 'ArbStore —';
const defaultTitle = `${prefix} Decentralized Escrow`;

const routes = [
  {
    path: '/',
    name: defaultTitle,
    component: () => import('../views/Home.vue')
  },
  {
    path: '/arbiters/:id?',
    name: `${prefix} Arbiters`,
    alias: ['/arbiters'],
    component: () => import('../views/Arbiters.vue')
  },
  {
    path: '/edit/:token',
    name: `${prefix} Arbiter edit`,
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: `${prefix} About`,
    component: () => import('../views/About.vue')
  },
  {
    path: '/guide',
    name: `${prefix} User Guide`,
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/arb-guide',
    name: `${prefix} Arbiter Guide`,
    component: () => import('../views/Arb-guide.vue')
  },
  {
    path: '/fiat-in-out',
    name: `${prefix} In / Out`,
    component: () => import('../views/Fiat-in-out.vue')
  },
  {
    path: '/partners',
    name: `${prefix} For Partners`,
    component: () => import('../views/Partners.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: `${prefix} Not Found`,
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/privacy',
    name: `${prefix} Privacy Policy`,
    component: PrivacyPolicy
  },
  {
    path: '/terms',
    name: `${prefix} Terms & Conditions`,
    component: Terms
  },
  {
    path: '/arbiter-code-of-conduct',
  name: `${prefix} Code of conduct for arbiters`,
    component: CodeOfConduct
  },
  {
    path: '/arbiters-listing-criteria',
    name: `${prefix} Arbiters' listing criteria`,
    component: ListingCriteria
  },
  {
    path: '/obyte-usdc-guide',
    name: `${prefix} How to get USDC into Obyte wallet to pay the contract`,
    component: HowGetUSDC
  }
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

router.beforeEach((to, _, next) => {
  document.title = to.name || defaultTitle;
  next();
})

export default router
