<template>
  <div>
    <v-expansion-panels class="mb-6">
      <v-expansion-panel v-for="i in 3" :key="i">
        <v-expansion-panel-title expand-icon="mdi-menu-down"> Nike </v-expansion-panel-title>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
