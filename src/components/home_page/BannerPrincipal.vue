<template>
  <div class="banner">
    <div class="parent">
      <img src="/src/assets/images/banner-bg.jpg" alt="" />
      <div class="contenido">
        <h3><span>Gran descuento</span> de Temporada</h3>
        <p class="descuento">Hasta un 20% de descuento en productos seleccionados.</p>
        <v-btn
          variant="outlined"
          density="compact"
          height="50"
          width="160"
          style="border-radius: 30px; text-transform: none"
          >Ir a Comprar</v-btn
        >
      </div>
      <v-container>
        <v-row>
          <v-col cols="6"> </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style>
.banner {
  .parent {
    height: 500px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .contenido {
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
          color: #9c9ea1;
        }
      }
    }

    .descuento {
      margin: 20px 0 40px;
    }
  }
}
/* Responsive */
@media (max-width: 990px) {
  .banner {
    .parent {
      .contenido {
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .contenido {
        padding-left: 20px;
        h3 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
        .descuento {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .contenido {
        padding-left: 20px;
        padding-top: 20px;
        h3 {
          font-size: 24px;
        }
        width: 0%;
        left: 0;
        .descuento {
          font-size: 12px;
        }
        bottom {
          height: 30px !important;
          width: 130px !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
</style>
