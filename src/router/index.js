import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaginaNosotros from '@/views/PaginaNosotros.vue'
import PaginaPoliticas from '@/views/PaginaPoliticas.vue'
import PaginaContacto from '@/views/PaginaContacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: PaginaNosotros,
    },
    {
      path: '/politicas',
      name: 'politicas',
      component: PaginaPoliticas,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: PaginaContacto,
    },
  ],
})

export default router
