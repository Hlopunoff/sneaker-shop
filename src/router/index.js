import { createRouter, createWebHistory } from 'vue-router'

import { AppLayoutMain } from '../layouts/main-layout'

const routes = [
  {path: '/', component: AppLayoutMain}
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})