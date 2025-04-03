<template>
  <app-layout>
    <RouterView />
    <VistaRapida />
    <v-snackbar v-model="bar" location="left bottom" max-width="300" timeout="3000"
      >{{ itemTitle }} se ha agregado a su carrito con exito !
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>
<script setup>
import { RouterView } from 'vue-router'
import AppLayout from '@/components/global/AppLayout.vue'
import VistaRapida from '@/components/global/VistaRapida.vue'
</script>
<script>
export default {
  inject: ['Emitter'],
  data: () => ({
    bar: false,
    itemTitle: '',
  }),
  mounted() {
    this.Emitter.on('showMsg', (data) => {
      this.itemTitle = data
      this.bar = true
    })
  },
}
</script>

<style scoped></style>
