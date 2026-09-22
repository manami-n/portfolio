import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/websites',
      name: 'Websites',
      component: () => import('../views/Websites.vue')
    }
  ]
})

export default router
