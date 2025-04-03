<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: rgb(198, 198, 198);
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="12" md="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-80"
                width="400"
                alt=""
                v-if="!loading"
              />
              <v-skeleton-loader type="image, image, image" v-if="loading"></v-skeleton-loader>
              <v-tabs center-active height="130" v-model="tab" class="mt-10">
                <v-tab v-for="(img, i) in product.images" :key="i" class="mx-10" :value="img">
                  <img :src="img" alt="" width="70" height="auto" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" class="pt-0 pl-6 mt-8 mt-md-0">
              <v-skeleton-loader
                type="article, article, article"
                v-if="loading"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="font-weight: bold; white-space: pre-wrap; font-size: 19px"
                  >({{ product.title }}) Categoría - {{ product.category }}</v-card-title
                >
                <div class="rating-parent d-flex align-center" style="gap: 10px">
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="small"
                    density="compact"
                  >
                  </v-rating>
                  <span class="mt-1" style="color: rgb(96, 96, 96); font-size: 13px"
                    >Inventario: {{ product.stock }}</span
                  >
                </div>
                <v-card-text class="px-0" style="color: rgb(96, 96, 96); font-size: 13px"
                  >{{ product.description }}
                </v-card-text>
                <v-card-text class="px-0" style="color: rgb(96, 96, 96); font-size: 13px"
                  >Disponibilidad: {{ product.stock > 0 ? 'En existencia' : 'No disponible' }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  $<del> {{ product.price }}</del> ahora a
                  <span class="text-black" style="font-weight: 900; font-size: 15px"
                    >${{
                      Math.ceil(product.price - product.price * (product.discountPercentage / 100))
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  Cantidad
                  <div
                    class="counter px-1"
                    style="
                      border-radius: 30px;
                      border: 1px solid rgb(201, 201, 201);
                      width: fit-content;
                    "
                  >
                    <v-icon size="22" @click="quantity > 1 ? quantity-- : false">mdi-minus</v-icon>
                    <input
                      type="number"
                      style="border: none; outline: none; width: 60px; font-size: 13px"
                      class="text-center py-2"
                      min="1"
                      v-model="quantity"
                    />
                    <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                  </div>
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  SubTotal: $
                  {{
                    Math.ceil(product.price - product.price * (product.discountPercentage / 100)) *
                    quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-7 w-100 px-0">
                  <v-btn
                    variant="outlined"
                    style="text-transform: none; border-radius: 30px; background-color: black"
                    class="w-75 text-white"
                    height="50"
                    density="compact"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                  >
                    Agregar al carrito
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs'
import { cartStore } from '../stores/cart'
import { mapActions } from 'pinia'
export default {
  inject: ['Emitter'],
  methods: {
    ...mapActions(cartStore, ['addItem']),
    addToCart(item) {
      item.quantity = this.quantity
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
        this.addItem(item)
        this.Emitter.emit('openCart')
        this.Emitter.emit('showMsg', item.title)
        this.dialog = false
      }, 1000)
    },
  },
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    loading: false,
    tab: '',
    quantity: 1,
    dialog: false,
    product: '',
    btnLoading: false,
  }),
  mounted() {
    this.Emitter.on('openQuickView', (data) => {
      this.loading - true
      this.product = data
      this.dialog = true
      setTimeout(() => {
        this.loading = false
      }, 1000)

      //console.log(data)
    })
  },
}
</script>
<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.content-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(149, 149, 149);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(200, 200, 200);
  }
}
</style>
