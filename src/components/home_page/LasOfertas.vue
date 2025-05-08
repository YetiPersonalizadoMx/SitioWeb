<template>
  <div class="ofertas bg-grey-lighten-4 py-5 pt-3">
    <h2 class="pb-4 text-center" style="font-weight: 300; font-size: 36px">Promociones</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="4" lg="4" md="6" sm="12" class="mt-1 pt-sm-1 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              @click="$router.push({ name: 'productos' })"
              class="parent"
              v-bind="props"
              style="overflow: hidden; width: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/offer4.jpg"
                :style="`width:100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" lg="4" md="6" sm="12" class="mt-1 pt-sm-1 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              @click="$router.push({ name: 'productos' })"
              class="parent"
              v-bind="props"
              style="overflow: hidden; width: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/offer6.jpg"
                :style="`width:100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" lg="4" md="6" sm="12" class="mt-1 pt-sm-1 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              @click="$router.push({ name: 'productos' })"
              class="parent"
              v-bind="props"
              style="overflow: hidden; width: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/offer5.jpg"
                :style="`width:100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
/* Responsive */

@media (max-width: 960px) {
  .ofertas {
    .tercera {
      margin-top: 20px !important;
    }
  }
}
</style>
