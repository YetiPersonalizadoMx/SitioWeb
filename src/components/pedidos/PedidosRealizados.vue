<template>
  <div class="pedidos-realizados">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center py-7">
        <div class="text-center">
          <v-icon
            style="
              background: white;
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 76px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>

        <v-card-title style="font-size: 30px; font-weight: bold; color: rgb(93, 93, 93)">
          El pedido se realizo con exito</v-card-title
        >
        <v-card-text style="font-size: 17px; color: rgb(134, 134, 134)">
          En breve recibiras en tu correo los detalles de tu pedido. Gracias por su preferencia.
        </v-card-text>
        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="elevated" color="blue" @click="resetData">Lo tengo </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { cartStore } from '../stores/cart'
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit('close_popup')
        }, 200)
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ['resetItems']),
    resetData() {
      this.resetItems()
      this.dialog = false
      this.$router.push({ name: 'home' })
    },
  },
  mounted() {
    this.dialog = this.popup
  },
}
</script>
