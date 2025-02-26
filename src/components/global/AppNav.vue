<template>
  <div class="nav-bar">
    <v-app-bar color="#1C2641" class="py-3" height="fit-content" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <img
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer"
              src="/src/assets/images/logo2.jpg"
              height="50px"
              alt=""
            />
          </v-col>
          <v-col cols="5">
            <div class="position-relative" style="width: 90%">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                style="width: 100%; border-radius: 30px; outline: none"
                placeholder="Buscar en toda la tienda"
                class="py-3 px-5 bg-white"
              />
              <svg
                data-icon="search"
                viewBox="0 0 512 512"
                width="25px"
                style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%)"
              >
                <path
                  d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                ></path>
              </svg>
            </div>
          </v-col>
          <v-col cols="4" class="ps-8">
            <div class="parent text-white d-flex justify-space-between align-center">
              <div class="whatsapp d-flex flex-column align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style="height: 35px; fill: white"
                >
                  <title>whatsapp</title>
                  <path
                    d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
                  />
                </svg>
                <span>(33)175 66 478</span>
              </div>
              <div class="whislists d-flex flex-column align-center">
                <svg
                  viewBox="0 0 512 512"
                  class="icon icon-wishlist"
                  style="width: 28px; fill: white"
                >
                  <g>
                    <g>
                      <path
                        d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
                    c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
                    c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
                    c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
                    c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
                    c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
                    C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
                    c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
                    C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
                    c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
                    c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
                    C482,254.358,413.255,312.939,309.193,401.614z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="mt-1">Lista de deseos</span>
              </div>
              <div class="sign-in d-flex flex-column align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style="height: 30px; fill: white; stroke-width: 1"
                >
                  <title>account-outline</title>
                  <path
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                  />
                </svg>
                <span class="mt-1">Registrarme</span>
              </div>
              <div
                class="cart d-flex flex-column align-center"
                style="cursor: pointer"
                @click="openCart"
              >
                <v-badge location="right top" content="2" color="white" offsetX="-14"> </v-badge>
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
                <span class="mt-1">Carrito</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="5">
            <ul class="links d-flex text-white justify-space-between" style="list-style: none">
              <li @click="$router.push({ name: 'home' })" style="cursor: pointer">Inicio</li>
              <li @click="$router.push({ name: 'nosotros' })" style="cursor: pointer">Nosotros</li>
              <li>Productos</li>
              <li @click="$router.push({ name: 'contacto' })" style="cursor: pointer">Contacto</li>
              <li>FAQ</li>
            </ul>
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="5" class="d-flex justify-end">
            <div class="help d-flex align-center text-white" style="gap: 5px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                style="width: 20px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>

              <span>Ayuda</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
  },
}
</script>
<style>
/* Responsive */
@media (max-width: 1500px) {
  .parent {
    font-size: 14px;
  }
}
@media (max-width: 1200px) {
  .parent {
    font-size: 12px;
  }
}
@media (max-width: 1100px) {
  .parent {
    font-size: 10px;
  }
}
</style>
