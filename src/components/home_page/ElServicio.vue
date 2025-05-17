<template>
  <div class="servicios">
    <v-container>
      <v-row>
        <!-- <v-col cols="12" sm="6" md="4" lg="4"> -->
        <v-col cols="4" sm="4" md="4" lg="4">
          <div
            class="parent d-flex align-center justify-center flex-column flex-sm-row"
            style="gap: 5px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style="height: 30px"
              class="mb-5 mb-sm-0"
            >
              <title>truck-fast</title>
              <path
                d="M3,13.5L2.25,12H7.5L6.9,10.5H2L1.25,9H9.05L8.45,7.5H1.11L0.25,6H4A2,2 0 0,1 6,4H18V8H21L24,12V17H22A3,3 0 0,1 19,20A3,3 0 0,1 16,17H12A3,3 0 0,1 9,20A3,3 0 0,1 6,17H4V13.5H3M19,18.5A1.5,1.5 0 0,0 20.5,17A1.5,1.5 0 0,0 19,15.5A1.5,1.5 0 0,0 17.5,17A1.5,1.5 0 0,0 19,18.5M20.5,9.5H18V12H22.46L20.5,9.5M9,18.5A1.5,1.5 0 0,0 10.5,17A1.5,1.5 0 0,0 9,15.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 9,18.5Z"
              />
            </svg>
            <span> Envío Gratis </span>
          </div>
        </v-col>
        <v-col cols="4" sm="4" md="4" lg="4">
          <div
            class="parent d-flex align-center justify-center segunda flex-column flex-sm-row"
            style="gap: 5px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style="height: 30px"
              class="mb-5 mb-sm-0"
            >
              <title>currency-usd</title>
              <path
                d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"
              />
            </svg>
            <span> Precios Justos </span>
          </div>
        </v-col>
        <v-col cols="4" sm="4" md="4" lg="4">
          <div
            class="parent d-flex align-center justify-center flex-column flex-sm-row"
            style="gap: 5px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style="height: 30px"
              class="mb-5 mb-sm-0"
            >
              <title>handshake</title>
              <path
                d="M11 6H14L17.29 2.7A1 1 0 0 1 18.71 2.7L21.29 5.29A1 1 0 0 1 21.29 6.7L19 9H11V11A1 1 0 0 1 10 12A1 1 0 0 1 9 11V8A2 2 0 0 1 11 6M5 11V15L2.71 17.29A1 1 0 0 0 2.71 18.7L5.29 21.29A1 1 0 0 0 6.71 21.29L11 17H15A1 1 0 0 0 16 16V15H17A1 1 0 0 0 18 14V13H19A1 1 0 0 0 20 12V11H13V12A2 2 0 0 1 11 14H9A2 2 0 0 1 7 12V9Z"
              />
            </svg>
            <span> Garantía </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.servicios {
  .segunda {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background-color: rgb(160, 160, 160);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: black;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}

/* Responsive */

@media (max-width: 600px) {
  .servicios {
    display: none;
    .segunda {
      &::before,
      &::after {
        display: none;
      }
    }
  }
}
</style>
