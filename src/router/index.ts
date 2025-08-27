import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Download from '../views/Download.vue'
import DocsPage from '../views/DocsPage.vue'
import Updates from '../views/Updates.vue'
import UpdatePage from '../views/UpdatePage.vue'

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
      redirect: '/docs/getting-started'
    },
    {
      path: '/docs/:slug',
      name: 'docs-page',
      component: DocsPage,
      props: true
    },
    {
      path: '/updates',
      name: 'updates',
      component: Updates
    },
    {
      path: '/updates/:slug',
      name: 'update-page',
      component: UpdatePage,
      props: true
    }
  ]
})

export default router
