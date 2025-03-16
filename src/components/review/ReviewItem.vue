<template>
  <Card>
    <button class="close" @click="store.deleteReview(item)">
      <i class="bi bi-x-lg"></i>
    </button>
    <button class="edit" @click="store.editReview(item)">
      <i class="bi bi-pencil-square"></i>
    </button>
    <div class="num-display">
      {{ item.rating }}
    </div>
    <div class="text-display">
      {{ item.text }}
    </div>
  </Card>
</template>
<script setup>
import Card from './shared/Card.vue'
import { useReviewsStore } from '../stores/reviews'
const store = useReviewsStore()
defineProps({
  item: {
    type: Object,
  },
})
</script>
<style scope>
.card {
  background-color: #fff;
  color: #212121;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;
}

.card.reverse {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}

.card h2 {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 40px;
}

.rating li,
.num-display {
  position: relative;
  /* background: #4ecca3; */
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #ccc solid;
  transition: 0.3s;
}

.rating li label {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.rating li:hover,
.num-display {
  background: #4ecca3;
  color: #fff;
}

[type='radio'] {
  opacity: 0;
}

[type='radio']:checked ~ label {
  background: #4ecca3;
  color: #fff;
}

.input-group {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
}

input {
  flex-grow: 2;
  border: none;
  font-size: 16px;
}

input:focus {
  outline: none;
}

.num-display {
  position: absolute;
  top: -10px;
  left: -10px;
}

.close,
.edit {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
}

.edit {
  right: 45px;
}

.btn {
  color: #fff;
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;
}

.btn-primary {
  background-color: #232931;
}

.btn-secondary {
  background: #4ecca3;
}

.btn:hover {
  transform: scale(0.98);
  opacity: 0.9;
}

.btn:disabled {
  background-color: #cccccc;
  color: #333;
  cursor: auto;
}

.btn:disabled:hover {
  transform: scale(1);
  opacity: 1;
}

.message {
  padding-top: 10px;
  text-align: center;
  color: red;
}

.about-link {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  cursor: pointer;
}

.about-link a {
  color: #fff;
}

.about-link a:hover {
  color: #4ecca3;
}

.about h1 {
  margin-bottom: 20px;
}

.about p {
  margin: 10px 0;
}

@media (max-width: 600px) {
  .rating li {
    margin: 10px 3px;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0 40px;
  }

  .input-group input {
    width: 80%;
  }
}
.card.reverse {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
</style>
