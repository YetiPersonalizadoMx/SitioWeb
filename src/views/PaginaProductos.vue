<template>
  <div class="productos mt-10">
    <TodosLosProductos :productos="todosProductos" />
  </div>
</template>
<script>
import TodosLosProductos from '@/components/productos/TodosLosProductos.vue'
import { moduloProductos } from '@/components/stores/productos.js'
import { useReviewsStore } from '@/components/stores/reviews'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    TodosLosProductos,
  },
  computed: {
    ...mapState(moduloProductos, ['todosProductos', 'conDescuento']),
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
