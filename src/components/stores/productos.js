import { defineStore } from 'pinia'
/* import axios from 'axios' */

export const moduloProductos = defineStore('moduloProductos', {
  state: () => ({
    loNuevo: [],
    conDescuento: [],
    todosProductos: [],
    singleProduct: '',
  }),
  actions: {
    async getProducts() {
      try {
        //const productos = await fetch(`http://localhost:3000/productos`)
        const productos = await fetch(`https://servidor-8jvc.onrender.com/data/productos`)
        const datos = await productos.json()
        this.loNuevo = datos.slice(0, 8)
        this.conDescuento = datos.slice(8, 13)
        this.todosProductos = datos
        //console.log(datos)
      } catch (error) {
        console.log(error)
      }
    },
    async getProduct(productId) {
      try {
        //const producto = await fetch(`http://localhost:3000/productos/${productId}`)
        const producto = await fetch(
          `https://servidor-8jvc.onrender.com/data/productos/${productId}`,
        )
        const dato = await producto.json()
        this.singleProduct = dato
        //console.log(dato)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
