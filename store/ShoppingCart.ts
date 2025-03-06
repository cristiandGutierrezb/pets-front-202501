import { create } from 'zustand'

import { ProductDAO } from '@/interfaces/MarketplaceInterface'

type Store = {
  items: ProductDAO[]
  addItem: (item: ProductDAO) => void
  removeItem: (index: number) => void
}

const uniqueProducts = (oldArrayProducts: ProductDAO[], newItem: ProductDAO): ProductDAO[] => {
  let newArray = []
  const existProduct = oldArrayProducts.findIndex((product) => product.id_product === newItem.id_product)

  if (existProduct < 0) {
    newItem.quantity = 1
    newArray = [...oldArrayProducts, newItem]
  } else {
    const updatedCart = [...oldArrayProducts]
    if (!updatedCart[existProduct].quantity) {
      updatedCart[existProduct].quantity = 0
    }
    updatedCart[existProduct].quantity++
    newArray = updatedCart
  }

  return newArray
}

export const useShoppingCartStore = create<Store>()((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: uniqueProducts(state.items, item) })),
  removeItem: (index) => set((state) => ({ items: state.items.filter((_, i) => i != index) }))
}))