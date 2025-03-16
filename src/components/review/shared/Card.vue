<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" :class="{ reverse: reverse }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.card {
  background: #fff;
  color: #212121;
  .reverse {
    background: #212121;
    color: #fff;
  }
}
</style>
