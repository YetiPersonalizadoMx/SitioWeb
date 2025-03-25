<template>
  <div class="home">
    <BannerPrincipal />
    <ElServicio />
    <LoNuevo :productos="loNuevo" />
    <LasOfertas />
    <ConDescuento :productos="conDescuento" />
    <LasCategorias />
  </div>
</template>
<script>
import BannerPrincipal from '@/components/home_page/BannerPrincipal.vue'
import ElServicio from '@/components/home_page/ElServicio.vue'
import LasOfertas from '@/components/home_page/LasOfertas.vue'
import ConDescuento from '@/components/home_page/ConDescuento.vue'
import { moduloProductos } from '@/components/stores/productos.js'
import { useReviewsStore } from '@/components/stores/reviews'
import { mapActions, mapState } from 'pinia'
import LoNuevo from '@/components/home_page/LoNuevo.vue'
import LasCategorias from '@/components/home_page/LasCategorias.vue'

export default {
  name: 'HomeView',
  components: {
    BannerPrincipal,
    ElServicio,
    LasOfertas,
    LoNuevo,
    LasCategorias,
    ConDescuento,
  },
  computed: {
    ...mapState(moduloProductos, ['loNuevo', 'conDescuento']),
  },
  methods: {
    ...mapActions(moduloProductos, ['getProducts']),
    ...mapActions(useReviewsStore, ['fetchReviews']),
  },
  async mounted() {
    await this.getProducts()
    await this.fetchReviews()
  },
}
</script>
