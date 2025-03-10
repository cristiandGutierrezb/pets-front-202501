'use client'
import Link from "next/link"
import CustomButton from "../atoms/CustomButton"

import { useShoppingCartStore } from "../../store/ShoppingCart"
import { ProductDAO } from "@/interfaces/MarketplaceInterface"

import { standarContainer } from "@/utils/Tokens"

interface CustomCartProps {
  product: ProductDAO
}

export default function CustomCart({ product }: CustomCartProps) {

  const addItem = useShoppingCartStore((state) => state.addItem)

  const onAddProduct = () => {
    addItem(product)
  }

  return (
    <section className={`${standarContainer} flex flex-col w-60 p-5`}>
      {/* <Image src="" alt="" /> */}
      <p className="font-bold">{ product.title }</p>
      <p className="font-semibold">
        {
          product.description.length > 50
            ? `${product.description.slice(0, 50)}...`
            : product.description
        }
      </p>
      <Link href={`/marketplace/products/${product.id_product}`}>More details...</Link>
      <CustomButton 
        text="Add to Cart"
        color="bg-primary"
        onClickButton={onAddProduct}
      />
    </section>
  )
}
