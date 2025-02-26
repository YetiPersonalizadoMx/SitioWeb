import { defineStore } from 'pinia'
import axios from 'axios'

export const moduloProductos = defineStore('moduloProductos', {
  state: () => ({
    loNuevo: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get('https://dummyjson.com/products')
        .then((res) => (this.loNuevo = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err))
    },
  },
})
