'use client'
import { useEffect, useState } from "react"

import { getProductById } from "@/libs/api-marketplace"

import { ProductDAO, ServiceProductDetail } from "@/interfaces/MarketplaceInterface"

interface ProductDetailProps {
  idProduct: number
}

export default function ProductDetail({ idProduct }: ProductDetailProps) {

  const [product, setProduct] = useState<ProductDAO>({
    id_product: 0,
    title: '',
    value: 0,
    description: '',
    stock: 0,
    state_id: 0
  })

  useEffect(() => {
    getProductById(idProduct)
    .then((data: ServiceProductDetail) => {
      setProduct(data.data)
    })
  }, [])

  return (
    <main className="max-w-screen-xl mx-auto">
      { idProduct }
    </main>
  )
}
