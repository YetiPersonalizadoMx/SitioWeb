import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaginaNosotros from '@/views/PaginaNosotros.vue'
import PaginaPoliticas from '@/views/PaginaPoliticas.vue'
import PaginaContacto from '@/views/PaginaContacto.vue'
import PaginaFAQ from '@/views/PaginaFAQ.vue'
import PostDetails from '../components/blog/PostDetails.vue'
import PaginaReviews from '@/views/PaginaReviews.vue'

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
    {
      path: '/faq',
      name: 'faq',
      component: PaginaFAQ,
    },
    {
      path: '/post/:id',
      name: 'postDetails',
      component: PostDetails,
    },
    {
      path: '/valoracion',
      name: 'valoracion',
      component: PaginaReviews,
    },
    {
      path: '/products/product-details/:productId',
      name: 'product-details',
      component: () => import('@/views/DetallesProducto.vue'),
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('@/views/PaginaCarrito.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/PaginaPago.vue'),
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('@/views/PaginaProductos.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
