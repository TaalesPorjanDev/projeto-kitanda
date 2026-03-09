import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: () => import('../views/Carrinho.vue'),
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/Produtos.vue'),
    },
  ],
})

export default router
