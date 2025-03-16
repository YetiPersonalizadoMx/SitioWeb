<template>
  <div class="banner">
    <v-carousel height="auto" show-arrows="hover" cycle hide-delimiter-background>
      <v-carousel-item src="/src/assets/images/banner-bg.jpg" cover>
        <div class="banner1-text">
          <h3><span>Gran descuento</span> de Temporada</h3>
          <p class="descuento">Hasta un 20% de descuento en productos seleccionados.</p>
          <v-btn
            variant="outlined"
            style="border-radius: 30px; text-transform: none; height: 50px; width: 160px"
            >Ir a Comprar</v-btn
          >
        </div>
      </v-carousel-item>
      <v-carousel-item src="/src/assets/images/banner-bg2.jpg" cover>
        <div class="banner1-text">
          <h3><span>Productos</span> con descuentos del 20%</h3>
          <p class="descuento">Desde un 10% a 20% de descuento en productos seleccionados.</p>
          <v-btn
            variant="outlined"
            style="border-radius: 30px; text-transform: none; height: 50px; width: 160px"
            >Ir a Comprar</v-btn
          >
        </div>
      </v-carousel-item>
      <v-carousel-item src="/src/assets/images/banner-bg31.jpg" cover>
        <div class="banner1-text">
          <h3><span>Semana Santa</span> y descuentos de Temporada</h3>
          <p class="descuento">Hasta un 10% de descuento en productos seleccionados.</p>
          <v-btn
            variant="outlined"
            style="border-radius: 30px; text-transform: none; height: 50px; width: 160px"
            >Ir a Comprar</v-btn
          >
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<style scoped>
.banner1-text {
  color: white;
  padding: 100px 0 0 100px;
  position: absolute;
  left: 40px;
  top: 20px;
  width: 600px;
  h3 {
    font-size: 50px;
    font-weight: 900;
    span {
      color: #5597fa;
    }
  }
}

/* Responsive */
@media (max-width: 1500px) {
  .banner {
    .v-btn {
      width: 120px !important;
      height: 36px !important;
    }
  }

  .banner1-text {
    padding: 80px 0 0 80px;
    position: absolute;
    left: 40px;
    top: 20px;
    width: 500px;
    h3 {
      font-size: 40px;
      font-weight: 900;
      span {
        font-size: 40px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .banner {
    .v-btn {
      width: 100px !important;
      height: 30px !important;
      font-size: 12px;
    }
  }

  .banner1-text {
    padding: 60px 0 0 60px;
    position: absolute;
    left: 40px;
    top: 20px;
    width: 400px;
    h3 {
      font-size: 30px;
      font-weight: 900;
      span {
        font-size: 30px;
      }
    }
  }
}
@media (max-width: 1000px) {
  .banner {
    .v-btn {
      width: 80px !important;
      height: 20px !important;
      font-size: 10px;
    }
  }

  .banner1-text {
    padding: 40px 0 0 40px;
    position: absolute;
    left: 40px;
    top: 20px;
    width: 350px;
    h3 {
      font-size: 25px;
      font-weight: 900;
      span {
        font-size: 25px;
      }
    }
    .descuento {
      font-size: 14px;
    }
  }
}
@media (max-width: 850px) {
  .banner {
    .v-btn {
      display: none;
    }
  }

  .banner1-text {
    display: none;
  }
}
</style>
