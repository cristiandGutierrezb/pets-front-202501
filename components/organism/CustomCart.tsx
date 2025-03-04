'use client'
import Image from "next/image"
import CustomButton from "../atoms/CustomButton"

import { useStore } from "../../store/ShoppingCart"

export default function CustomCart() {

  const { inc } = useStore()

  const onAddToCart = () => {
    console.log('Add to Cart')
  }

  return (
    <section>
      {/* <Image src="" alt="" /> */}
      <p>Title</p>
      <p>Description</p>
      <CustomButton 
        text="Add to Cart"
        color="bg-primary"
        onClickButton={inc}
      />
    </section>
  )
}
