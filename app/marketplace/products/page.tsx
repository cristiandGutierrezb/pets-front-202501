'use client'
import { useEffect } from "react";

import CustomCart from "@/components/organism/CustomCart";

import { getListProducts } from "@/libs/api-marketplace";

export default function ProductPage() {

  const listItems: any = []

  useEffect(() => {
    getListProducts()
    .then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <main className="w-full flex">
      <section className="max-w-screen-xl mx-auto flex flex-wrap gap-5">
        {
          listItems.map((_: any, index: number) => <CustomCart key={index} />)
        }
      </section>
    </main>
  )
}
