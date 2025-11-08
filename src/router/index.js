import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage
  },
  {}
]

const router = createRouter({
  history: createWebHistory('/Coal_Company/'),
  routes
})

export default router
