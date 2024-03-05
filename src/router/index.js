import { createRouter, createWebHistory } from 'vue-router'

import { MainLayout } from '@/layouts/main'
import { AppMainPage } from '@/pages/main'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {path: '', component: AppMainPage},
    ]
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})