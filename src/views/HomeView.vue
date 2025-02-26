<template>
  <div class="home">
    <BannerPrincipal />
    <ElServicio />
    <LasOfertas />
    <LoNuevo :productos="loNuevo" />
    <LasCategorias />
  </div>
</template>
<script>
import BannerPrincipal from '@/components/home_page/BannerPrincipal.vue'
import ElServicio from '@/components/home_page/ElServicio.vue'
import LasOfertas from '@/components/home_page/LasOfertas.vue'
import { moduloProductos } from '@/components/stores/productos.js'
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
  },
  computed: {
    ...mapState(moduloProductos, ['loNuevo']),
  },
  methods: {
    ...mapActions(moduloProductos, ['getProducts']),
  },
  async mounted() {
    await this.getProducts()
  },
}
</script>
