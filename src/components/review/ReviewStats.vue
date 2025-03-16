<template>
  <div class="feedback-stats">
    <p>{{ store.reviewsCount ? store.reviewsCount : 'No' }} Reseñas</p>
    <p>Promedio: {{ isNaN(store.averageRating) ? 0 : store.averageRating }}</p>
  </div>
</template>
<script setup>
import { useReviewsStore } from '../stores/reviews'

const store = useReviewsStore()
</script>
<style scoped>
.feedback-stats {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
