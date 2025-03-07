<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      location="left"
      temporary
      v-model="drawer"
      width="370"
      class="px-5 pt-0 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-5 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
        >
          Menu
          <v-icon @click="drawer = false">mdi-close </v-icon>
        </v-card-title>
        <v-list>
          <v-list-item class="px-0">
            <v-list-item-title @click="$router.push({ name: 'home' })" style="cursor: pointer">
              Inicio
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-title @click="$router.push({ name: 'nosotros' })" style="cursor: pointer">
              Nosotros
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-title> Productos </v-list-item-title>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-title @click="$router.push({ name: 'contacto' })" style="cursor: pointer">
              Contacto
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-title @click="$router.push({ name: 'faq' })" style="cursor: pointer">
              FAQ
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
  }),
  inject: ['Emitter'],
  mounted() {
    this.Emitter.on('openMenu', () => {
      this.drawer = true
    })
  },
}
</script>
