<template>
  <div class="ofertas bg-grey-lighten-4 py-9">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 px-3 pr-lg-6" style="width: 100%">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/oferta1.jpeg"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 mt-5 mt-sm-0"
          style="width: 100%"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/oferta2.jpeg"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 mt-0 mt-lg-0 tercera" style="width: 100%">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/oferta3.jpeg"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <v-col cols="12" sm="6" class="mt-3 px-3 pr-sm-5 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/offer4.jpg"
                :style="`width:100%; height: 100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="mt-3 pl-3 pl-sm-5 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/offer5.jpg"
                :style="`width:100%;height: 100%; cursor:pointer; transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
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
