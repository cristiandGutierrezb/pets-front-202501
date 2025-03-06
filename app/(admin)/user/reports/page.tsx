'use client'

import { useEffect, useState } from "react"

import { getListProducts } from "@/libs/api-services";

import CustomButton from '@/components/atoms/CustomButton';

export default function Reports() {

  const [listProducts, setListProducts] = useState<any[]>([])
  
  useEffect(() => {
    getListProducts()
    .then((data: any) => {
      console.log('data', data);
      setListProducts(data.data)
    })
    .catch((e: any) => {
      alert(`No funciona:: ${JSON.stringify(e)}`)
    })
  }, [])

  const onChangeVar = () => {
    console.log('onchange');
    
  }
  
  return (
    <div>
      <ul>
        {listProducts.map((item) => (
          <li key={item.id_product}>{ item.title }</li>
        ))}
      </ul>
      <CustomButton
        color="bg-primary"
        onClickButton={onChangeVar}
        text="Change value"
      />
    </div>
  )
}
