export interface ServiceDataProducts {
  status: number
  message: string
  data: ProductDAO[]
}

export interface ProductDAO {
  id_product: number
  title: string
  value: number
  description: string
  stock: number
  state_id: number
  quantity?: number
}

export interface ServiceProductDetail extends Omit<ServiceDataProducts, 'data'> {
  data: ProductDAO
}
