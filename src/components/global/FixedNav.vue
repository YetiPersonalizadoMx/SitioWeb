<template>
  <div class="fixed-nav">
    <v-app-bar color="#1C2641">
      <v-container fluid>
        <v-row>
          <v-col cols="2" class="pt-4">
            <img
              @click="$router.push({ name: 'home' })"
              src="/src/assets/images/logo2.jpg"
              height="40px"
              alt=""
              style="margin-left: 35px; cursor: pointer"
            />
          </v-col>
          <v-col cols="5" lg="4">
            <ul class="links d-flex text-white justify-space-between pt-4" style="list-style: none">
              <li @click="$router.push({ name: 'home' })" style="cursor: pointer">Inicio</li>
              <li @click="$router.push({ name: 'nosotros' })" style="cursor: pointer">Nosotros</li>
              <li>Productos</li>
              <li @click="$router.push({ name: 'contacto' })" style="cursor: pointer">Contacto</li>
              <li @click="$router.push({ name: 'faq' })" style="cursor: pointer">FAQ</li>
            </ul>
          </v-col>
          <v-col cols="1" lg="2"> </v-col>
          <v-col cols="4" class="d-flex justify-end align-center" style="gap: 20px">
            <svg data-icon="search" viewBox="0 0 512 512" width="25px" fill="white">
              <path
                d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
              ></path>
            </svg>
            <div
              class="cart d-flex flex-column align-center"
              :style="`cursor: pointer; pointer-events: ${$route.name == 'carrito' ? 'none' : 'unset'};`"
              @click="openCart"
            >
              <v-badge
                location="right top"
                :content="cartItems.length"
                color="white"
                offsetX="-14"
                v-if="cartItems.length"
              >
              </v-badge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style="height: 28px; fill: white"
              >
                <title>Ir al Carrito</title>
                <path
                  d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
                />
              </svg>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from '../stores/cart'
import { mapState } from 'pinia'
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
  },
  computed: {
    ...mapState(cartStore, ['cartItems']),
  },
}
</script>
