<template>
  <div class="productos-swiper pt-16">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 35px" class="text-black">Nuevos Productos</h2>
      <a href="#" class="text-black" style="font-size: 14px">Todos los productos</a>
    </div>

    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-9 px-5"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000, pauseOnMouseEner: true, disableOnInteraction: false }"
      :breakpoints="breakpoints"
      :loop="true"
    >
      <swiper-slide v-for="item in productos" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="width: 200px; overflow: hidden">
              <img
                :src="showenItem[item.title] ? showenItem[item.title] : item.thumbnail"
                alt=""
                class="v-100"
                :style="`width: 200px; transition: 0.5s all ease-in-out; cursor:pointer; scale: ${isHovering ? 1.05 : 1}`"
                v-bind="props"
              />
            </div>
          </v-hover>

          <v-card-text class="pl-0 pb-1">
            {{ item.title }}
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
            color="black"
            size="x-small"
            density="compact"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            $<del> {{ item.price }}</del> ahora a
            <span class="text-black" style="font-weight: 900; font-size: 15px"
              >${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100)) }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="showenItem[item.title]">
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
          <div class="mt-5">
            <v-btn
              density="default"
              class="px-10"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
            >
              Selecciona Opcion</v-btn
            >
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
    width: 12px;
    height: 12px;
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
