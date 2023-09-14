import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'products',
    component: import('../views/ProductsView/index.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: import('../views/ProductView/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
