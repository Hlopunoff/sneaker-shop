import { createRouter, createWebHistory } from 'vue-router'

import { MainLayout } from '@/layouts/main'
import { AppMainPage } from '@/pages/main'
import AppFavoritesPage from '@/pages/favorites.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    name: 'Главная',
    children: [
      { path: '', component: AppMainPage, name: 'Главная' },
      { path: 'wishlist', component: AppFavoritesPage, name: 'Избранное' }
    ]
  }
]

export const router = createRouter({
  routes,
  strict: true,
  sensitive: true,
  history: createWebHistory(),
})