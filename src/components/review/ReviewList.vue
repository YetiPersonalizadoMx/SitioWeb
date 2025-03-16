<template>
  <div>
    <p v-if="!store.reviewsContent || store.reviewsContent.length === 0">No hay resenas</p>
    <div v-else class="reviewList">
      <ReviewItem v-for="(item, i) in store.reviewsContent" :key="i" :item="item"></ReviewItem>
    </div>
  </div>
</template>
<script setup>
import ReviewItem from './ReviewItem.vue'
import { useReviewsStore } from '../stores/reviews'
const store = useReviewsStore()
</script>
<style scoped></style>
