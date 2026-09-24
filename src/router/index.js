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
    },
    {
      path: '/pupcakes',
      name: 'Pupcakes',
      component: () => import('../views/Pupcakes.vue')
    },
    {
      path: '/egenerator',
      name: 'Egenerator',
      component: () => import('../views/Egenerator.vue')
    },
    {
      path: '/gowheellas',
      name: 'Gowheellas',
      component: () => import('../views/Gowheellas.vue')
    },
    {
      path: '/instaplugin',
      name: 'Instaplugin',
      component: () => import('../views/Instaplugin.vue')
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
