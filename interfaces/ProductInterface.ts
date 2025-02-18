export interface ProductDAO {
  description: string
  id_product: number
  state_id: number
  stock: number
  title: string
  value: number
}

export interface StandarDAO {
  status: number
  message: string
  data: ProductDAO[]
}

