import { defineStore } from 'pinia'
/* import axios from 'axios' */

export const moduloProductos = defineStore('moduloProductos', {
  state: () => ({
    loNuevo: [],
    conDescuento: [],
  }),
  actions: {
    async getProducts() {
      try {
        const productos = await fetch(`http://localhost:3000/productos`)
        const datos = await productos.json()
        this.loNuevo = datos.slice(0, 8)
        this.conDescuento = datos.slice(8, 13)
        //console.log(datos)
      } catch (error) {
        console.log(error)
      }
      /* await axios
        .get('http://localhost:3000/productos')
        .then((res) => (this.loNuevo = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err)) */
    },
  },
})
