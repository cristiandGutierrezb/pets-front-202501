'use client'
import { useEffect, useState } from "react";

import CustomCart from "@/components/organism/CustomCart";

import { getListProducts } from "@/libs/api-marketplace";

import { ServiceDataProducts, ProductDAO } from "@/interfaces/MarketplaceInterface";

import { principalTitles } from "@/utils/Tokens";

export default function ProductPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [listProducts, setListProducts] = useState<ProductDAO[]>([])

  useEffect(() => {
    setIsLoading(true)
    getListProducts()
    .then((data: ServiceDataProducts) => {
      setIsLoading(false)
      setListProducts(data.data)
    })
  }, [])

  return (
    <main className="w-full flex flex-col py-10">
      <h1 className={`max-w-screen-xl mx-auto mb-10 ${principalTitles}`}>Nuestros productos</h1>
      <section className="max-w-screen-xl mx-auto flex flex-wrap gap-5">
        {isLoading ? (
          <section>Cargando...</section>
        ) : (
          listProducts.map((product) => (
            <CustomCart 
              key={product.id_product} 
              product={product} 
            />
          ))
        )}
      </section>
    </main>
  )
}
