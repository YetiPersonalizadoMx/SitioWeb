// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Pinia
import { createPinia } from 'pinia'

// Emitter
import mitt from 'mitt'
const Emitter = mitt()

// swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

//Bootstrapp
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify)
app.provide('Emitter', Emitter)
app.use(createPinia())

app.use(router)

app.mount('#app')
