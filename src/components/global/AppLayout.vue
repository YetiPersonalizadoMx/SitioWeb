<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer :windowWidth="windowWidth" />
      <MenuDrawer :windowWidth="windowWidth" />
      <v-main
        :style="`padding-top: ${
          $route.name == 'checkout' ? '0px' : windowWidth <= 990 ? '60px' : '150px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNav v-show="$route.name != 'checkout' && !showFixed && windowWidth > 990" />
      <ResponsiveNav v-show="windowWidth <= 990 && $route.name != 'checkout'" />
      <FixedNav v-show="$route.name != 'checkout' && showFixed && windowWidth > 990" />
      <AppFooter v-show="$route.name != 'checkout'" />
    </v-layout>
  </div>
</template>

<script>
import AppNav from './AppNav.vue'
import FixedNav from './FixedNav.vue'
import AppFooter from './AppFooter.vue'
import CartDrawer from './CartDrawer.vue'
import ResponsiveNav from './ResponsiveNav.vue'
import MenuDrawer from './MenuDrawer.vue'

export default {
  data: () => ({
    drawer: true,
    showFixed: false,
    windowWidth: 0,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      // console.log(this.windowWidth)
    }
    window.onscroll = () => {
      if (window.scrollY >= 205) {
        this.showFixed = true
      } else {
        this.showFixed = false
      }
    }
  },
}
</script>
