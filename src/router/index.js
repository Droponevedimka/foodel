import { createRouter, createWebHistory } from 'vue-router'

const routes = [  
  {
    path: '/',
    name: 'Body',
    component: () => import('../views/Main/main.vue'),

    children: [
      {
        path: '/garden',
        name: 'Garden',
        component: () => import('../components/modal/garden.vue')
      },
    
      {
        path: '/dinner',
        name: 'Dinner',
        component: () => import('../components/modal/dinner.vue')
      },
    
      {
        path: '/serial',
        name: 'Serial',
        component: () => import('../components/modal/serial.vue')
      },

      {
        path: '/velpath',
        name: 'Velpath',
        component: () => import('../components/modal/velpath.vue')
      },

      {
        path: '/smallcity',
        name: 'Smallcity',
        component: () => import('../components/modal/smallcity.vue')
      },

      {
        path: '/reservoirs',
        name: 'Reservoirs',
        component: () => import('../components/modal/reservoirs.vue')
      },

      {
        path: '/rules',
        name: 'Rules',
        component: () => import('../components/modal/rules.vue')
      },
    ]
  }, 

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: "NotFound",
    component: () => import('../views/404/404.vue'),
    meta: {
      requiresAuth: false
    }
  },
]

const router = createRouter({
  mode: 'abstract',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
