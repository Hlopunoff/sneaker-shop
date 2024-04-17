import { createRouter, createWebHistory } from 'vue-router'

import { MainLayout } from '@/layouts/main'
import { AppMainPage } from '@/pages/main'
import AppFavoritesPage from '@/pages/favorites.vue'
import AppPlpPage from '@/pages/plp.vue'
import AppPdpPage from '@/pages/pdp.vue'
import AppNotFoundPage from '@/pages/404.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    name: 'Главная',
    children: [
      { path: '', component: AppMainPage, name: 'Главная' },
      { path: 'wishlist', component: AppFavoritesPage, name: 'Избранное' },
      { path: 'catalog/category/:category', component: AppPlpPage, name: ':category' },
      { path: 'product/:id', component: AppPdpPage },
      { path: '/:pathMatch(.*)*', component: AppNotFoundPage, },
    ]
  },
]

export const router = createRouter({
  routes,
  strict: true,
  sensitive: true,
  history: createWebHistory(),
})