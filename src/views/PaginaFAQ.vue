<template>
  <div class="faq mt-10 mx-10 mb-10">
    <v-container fluid>
      <h1>FAQ</h1>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <h4>Sobre nuestros productos</h4>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="i in 5"
              :key="i"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              title="Pregunta"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <h4>Sobre los pagos, envios y reclamaciones</h4>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="i in 5"
              :key="i"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              title="Pregunta"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <h4>Sobre la personalizacion de los productos</h4>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="i in 5"
              :key="i"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              title="Pregunta"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <h4>Sobre las politicas de privacidad y proteccion de datos personales</h4>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="i in 5"
              :key="i"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              title="Pregunta"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-10 mx-auto">
        <BlogHeader></BlogHeader>
      </div>
    </div>
  </div>
</template>
<script>
import BlogHeader from '../components/blog/BlogHeader.vue'

export default {
  components: {
    BlogHeader,
  },
  mounted() {
    this.verifyPosts()
  },
  methods: {
    verifyPosts() {
      //alert('ALgo')
      const key = 'posts'
      const value = localStorage.getItem(key)
      const exists = value !== null
      if (exists) {
        //console.log('Si existe')
      } else {
        //console.log('no existe')
      }
    },
  },
}
</script>
