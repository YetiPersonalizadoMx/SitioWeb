<template>
  <div class="nosotros mt-10 mx-10">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="nosotros-col" style="padding-left: 20%; padding-right: 20%">
          <h2 class="text-center mt-10">¿Quiénes somos?</h2>
          <p style="text-align: justify">
            Yeti Personalizado MX es una empresa de carácter familiar dedicada a la comercialización
            de los productos YETI, los cuales son altamente reconocidos por su alta calidad y
            durabilidad. Entre los productos que comercializamos se encuentran; tazas, termos, vasos
            y hieleras entre otros articulos de la marca.
          </p>
        </v-col>

        <v-col cols="12" sm="6" class="mision" style="padding-left: 20%">
          <h3 class="text-center">Misión</h3>
          <p style="text-align: justify">
            En Yeti Personalizado MX, nos dedicamos a ofrecer productos premium de la marca YETI,
            como tazas, termos y hieleras, diseñados para satisfacer las necesidades de nuestros
            clientes más exigentes. Nuestra misión es ser la primera opción para aquellos que buscan
            productos innovadores y funcionales que mejoren su experiencia al aire libre, mientras
            consolidamos nuestra presencia en el mercado a través de las expansión digital.
          </p>
          <div class="parent">
            <img
              src="/src/assets/images/img-nosotros1.jpg"
              style="width: 100%; border-radius: 7px; margin-top: 5px"
              alt=""
            />
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="vision" style="padding-right: 20%">
          <h3 class="text-center">Visión</h3>
          <p style="text-align: justify">
            Ser el referente de productos YETI en México, con una expansión sostenida en línea que
            nos permita llevar lo mejor del aire libre a más personas, con la calidad y atención que
            nos caracteriza.
          </p>
          <div class="img-vision">
            <img
              src="/src/assets/images/img-nosotros2.jpg"
              style="width: 100%; border-radius: 7px; margin-top: 100px"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
/* Responsive */
@media (max-width: 1515px) {
  .nosotros-col {
    padding-left: 15% !important;
    padding-right: 15% !important;
  }
  .mision {
    padding-left: 15% !important;
  }
  .vision {
    padding-right: 15% !important;
  }
}
@media (max-width: 1000px) {
  .nosotros-col {
    padding-left: 10% !important;
    padding-right: 10% !important;
  }
  .mision {
    padding-left: 10% !important;
  }
  .vision {
    padding-right: 10% !important;
  }
}
@media (max-width: 990px) {
  .nosotros-col {
    padding-left: 5% !important;
    padding-right: 5% !important;
  }
  .mision {
    padding-left: 5% !important;
  }
  .vision {
    padding-right: 5% !important;
  }
}
@media (max-width: 800px) {
  .nosotros-col {
    padding-left: 2% !important;
    padding-right: 2% !important;
  }
  .mision {
    padding-left: 2% !important;
  }
  .vision {
    padding-right: 2% !important;
    img {
      margin-top: 10px !important;
    }
  }
}
@media (max-width: 700px) {
  .nosotros-col {
    padding-left: 0% !important;
    padding-right: 0% !important;
  }
  .mision {
    padding-left: 0% !important;
  }
  .vision {
    padding-right: 0% !important;
  }
}
</style>
