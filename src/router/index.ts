import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Download from '../views/Download.vue'
import Docs from '../views/Docs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    }
  ]
})

export default router
