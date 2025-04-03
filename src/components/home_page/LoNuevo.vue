<template>
  <div class="productos-swiper pt-10">
    <div class="title mb-10 px-5 d-flex align-center justify-center justify-space-between">
      <h2 style="font-weight: 200; font-size: 35px" class="text-black">Productos recientes</h2>
      <a href="#" class="text-black" style="font-size: 14px">Todos los productos</a>
    </div>

    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-9 px-5"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }"
      :breakpoints="breakpoints"
      :loop="true"
    >
      <swiper-slide v-for="item in productos" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent position-relative" style="width: 300px; overflow: hidden">
              <img
                :src="showenItem[item.title] ? showenItem[item.title] : item.thumbnail"
                alt=""
                class="v-100"
                :style="`width: 300px; transition: 0.5s all ease-in-out; cursor:pointer; scale: ${isHovering ? 1.05 : 1}`"
                v-bind="props"
              />
              <v-btn
                density="compact"
                width="100"
                height="30"
                variant="outlined"
                class="bg-white quick-view-btn"
                style="
                  text-transform: none;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  border-radius: 30px;
                  font-size: 12px;
                  transition: 0.2 all ease-in-out;
                  opacity: 0;
                "
                @click="openQuickView(item)"
                >Vista rapida</v-btn
              >
            </div>
          </v-hover>

          <v-card-text class="pl-0 pb-1">
            <strong>{{ item.title }} </strong> |
            {{
              item.description.split(' ').length <= 8
                ? item.description
                : item.description.split(' ').slice(0, 8).join(' ') + '...'
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="small"
            density="compact"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            $<del> {{ item.price }}</del> ahora a
            <span class="text-black" style="font-weight: 900; font-size: 15px"
              >${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100)) }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="showenItem[item.title]" mandatory>
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
              rounded="xl"
              :ripple="false"
              ><img
                :src="pic"
                width="30"
                height="30"
                style="border-radius: 50%; border: 1px solid black"
                alt=""
            /></v-btn>
          </v-btn-toggle>
          <div class="mt-5 d-flex align-center">
            <v-btn
              density="default"
              class="px-10 mr-5"
              size="large"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
              @click="$router.push({ name: 'product-details', params: { productId: item.id } })"
            >
              Selecciona Opcion</v-btn
            >
            <v-hover v-slot="{ isHovering, props }">
              <div v-bind="props">
                <span style="cursor: pointer"
                  ><svg
                    :style="`transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.2 : 1}`"
                    viewBox="0 0 512 512"
                    width="30px"
                    class="icon icon-wishlist"
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
                </span>
              </div>
            </v-hover>
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination, Navigation, Autoplay } from 'swiper'

export default {
  inject: ['Emitter'],
  methods: {
    openQuickView(product) {
      this.Emitter.emit('openQuickView', product)
    },
  },
  props: {
    productos: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    showenItem: {},
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      582: {
        slidesPerView: 2,
      },
      990: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  }),
}
</script>
<style>
.productos-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 1px solid rgb(53, 53, 53);
    border-radius: 50%;
    background-color: white;
    top: 43%;
    &::after {
      font-size: 13px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(53, 53, 53);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
}
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}
/* Responsive */
@media (max-width: 580px) {
  .productos-swiper {
    .img-parent {
      height: 300px !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      top: 56%;
    }
  }
}
</style>
