import { createRouter, createWebHistory } from 'vue-router'

import { MainLayout } from '@/layouts/main'
import { AppMainPage } from '@/pages/main'
import AppFavoritesPage from '@/pages/favorites.vue'
import AppPlpPage from '@/pages/plp.vue'
import AppPdpPage from '@/pages/pdp.vue'
import AppNotFoundPage from '@/pages/404.vue'
import AppProfilePage from '@/pages/profile.vue'

import { getAuth } from 'firebase/auth'

import { useAuthStore } from '@/modules/header/stores'

const routes = [
  {
    path: '/',
    component: MainLayout,
    name: 'Главная',
    children: [
      { 
        path: '', 
        component: AppMainPage, 
        name: 'Главная' 
      },
      { 
        path: 'wishlist', 
        component: AppFavoritesPage, 
        name: 'Избранное', 
        meta: { requiresAuth: true }
      },
      { 
        path: 'catalog/category/:category', 
        component: AppPlpPage, 
        name: ':category' 
      },
      { 
        path: 'product/:id', 
        component: AppPdpPage
      },
      {
        path: 'profile',
        component: AppProfilePage,
        meta: { requiresAuth: true }
      },
      { 
        path: '/:pathMatch(.*)*', 
        component: AppNotFoundPage, 
      },
    ]
  },
]

export const router = createRouter({
  routes,
  strict: true,
  sensitive: true,
  history: createWebHistory(),
  scrollBehavior: () => {
    return {
      top: 0,
      behavior: 'smooth',
    }
  }
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser || localStorage.getItem('user')) {
      next()
    } else {
      next('/')
      authStore.toggleAuthModal()
    }
  } else {
    next()
  }
})