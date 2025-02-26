<template>
  <app-layout>
    <RouterView />
  </app-layout>
</template>
<script>
import { RouterView } from 'vue-router'
import AppLayout from '@/components/global/AppLayout.vue'
export default {
  components: {
    AppLayout,
    RouterView,
  },
}
</script>

<style scoped></style>
