import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.cost, 0)
  },
  actions: {
    addItem(item) {
      this.items.push(item)
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    clearCart() {
      this.items = []
    }
  },
  persist: true  
})