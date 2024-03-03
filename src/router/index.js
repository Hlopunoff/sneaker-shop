import { createRouter, createWebHistory } from 'vue-router'

import { MainLayout } from '@/layouts/main'

const routes = [
  {
    path: '/',
    component: MainLayout,
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})