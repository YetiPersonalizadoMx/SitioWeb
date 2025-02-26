<template>
  <div class="drawer">
    <v-navigation-drawer
      location="right"
      temporary
      v-model="drawer"
      width="370"
      class="px-5 pt-0 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-5 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
        >
          Carrito de Compras
          <v-icon @click="drawer = false">mdi-close </v-icon>
        </v-card-title>
        <v-card-text> </v-card-text>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ['Emitter'],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on('openCart', () => {
      this.drawer = true
    })
  },
}
</script>
