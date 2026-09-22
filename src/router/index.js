import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/websites',
      name: 'Websites',
      component: () => import('../views/Websites.vue')
    },
    {
      path: '/webapps',
      name: 'WebApps',
      component: () => import('../views/Webapps.vue')  
    },
    {
      path: '/matcha',
      name: 'Matcha',
      component: () => import('../views/Matcha.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/Portfolio.vue')   
    },
    {
      path: '/prevport',
      name: 'Prevport',
      component: () => import('../views/Prevport.vue')   
    },
    {
      path: '/wedding',
      name: 'Wedding',
      component: () => import('../views/Wedding.vue')   
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
