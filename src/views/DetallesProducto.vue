<template>
  <div class="detalles-producto mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            width="500"
            alt=""
            v-if="!loading"
          />
          <v-skeleton-loader type="image, image, image" v-if="loading"></v-skeleton-loader>
          <v-tabs center-active height="200" v-model="tab" class="mt-10">
            <v-tab v-for="(img, i) in singleProduct.images" :key="i" class="mx-10" :value="img">
              <img :src="img" alt="" width="100" height="auto" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5" class="pt-0 pl-6 mt-8 mt-md-0">
          <v-skeleton-loader type="article, article, article" v-if="loading"></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title class="px-0" style="font-weight: bold; font-size: 19px"
              >({{ singleProduct.title }}) Categoría - {{ singleProduct.category }}</v-card-title
            >
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="small"
                density="compact"
              >
              </v-rating>
              <span class="mt-1" style="color: rgb(96, 96, 96); font-size: 13px"
                >Inventario: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="color: rgb(96, 96, 96); font-size: 13px"
              >{{ singleProduct.description }}
            </v-card-text>
            <v-card-text class="px-0" style="color: rgb(96, 96, 96); font-size: 13px"
              >Disponibilidad: {{ singleProduct.stock > 0 ? 'En existencia' : 'No disponible' }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              $<del> {{ singleProduct.price }}</del> ahora a
              <span class="text-black" style="font-weight: 900; font-size: 15px"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price * (singleProduct.discountPercentage / 100),
                  )
                }}</span
              >
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              Cantidad
              <div
                class="counte px-1"
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
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price * (singleProduct.discountPercentage / 100),
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-7 w-100 px-0">
              <v-btn
                variant="outlined"
                style="text-transform: none; border-radius: 30px; background-color: black"
                class="w-75 text-white"
                height="50"
                density="compact"
                @click="addToCart(singleProduct)"
                :loading="btnLoading"
              >
                Agregar al carrito
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { moduloProductos } from '@/components/stores/productos'
import { mapActions, mapState } from 'pinia'
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs'
import { cartStore } from '@/components/stores/cart'
export default {
  inject: ['Emitter'],
  computed: {
    ...mapState(moduloProductos, ['singleProduct']),
  },
  methods: {
    ...mapActions(moduloProductos, ['getProduct']),
    ...mapActions(cartStore, ['addItem']),
    addToCart(item) {
      item.quantity = this.quantity
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
        this.addItem(item)
        this.Emitter.emit('openCart')
        this.Emitter.emit('showMsg', item.title)
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
    btnLoading: false,
    /* productos: {
      id: '1',
      title: 'Botella de 36 oz (1.1 L)',
      description:
        'Con esta gran botella con aislamiento podrás hidratarte mientras pasas el día en la naturaleza.',
      category: 'Botellas',
      price: 50,
      discountPercentage: 10,
      rating: 4.7,
      stock: 25,
      thumbnail:
        'https://yeti-webmedia.imgix.net/m/7c8b123fca3363c7/W-site_studio_drinkware_Rambler_26oz_Straw_Bottle_Firefly_Yellow_on_Firefly_Yellow_Front_0149_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      images: [
        'https://yeti-webmedia.imgix.net/m/50e5222583c8ccc8/W-site_studio_drinkware_Rambler_36oz_Bottle_Ultramarine_Violet_Back_4085_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
        'https://yeti-webmedia.imgix.net/m/2a465c5506e82ccd/W-site_studio_drinkware_Rambler_36oz_Bottle_Tropical_Pink_Back_4085_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
        'https://yeti-webmedia.imgix.net/m/2f1920b990bfa70e/W-site_studio_drinkware_Rambler_36oz_Bottle_Big_Sky_Blue_Back_4085_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
        'https://yeti-webmedia.imgix.net/m/6fb02a8d83f70c93/W-site_studio_drinkware_Rambler_36oz_Bottle_Low_Country_Peach_Back_4085_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
        'https://yeti-webmedia.imgix.net/m/455976e9414c3ef8/W-site_studio_drinkware_Rambler_36oz_Bottle_Big_Wave_Blue_Back_4085_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
        'https://yeti-webmedia.imgix.net/m/2da5be44d9be581e/W-site_studio_drinkware_Rambler_36oz_Bottle_Firefly_Yellow_Back_4085_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      ],
    }, */
  }),
  async beforeMount() {
    this.loading = true
    await this.getProduct(this.$route.params.productId)
    this.loading = false
  },
}
</script>
<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
