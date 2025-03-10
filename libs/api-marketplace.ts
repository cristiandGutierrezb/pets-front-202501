
import { envVariables } from "@/utils/config"

export const getListProducts = async () => {
  return fetch(`${envVariables.API_URL}/products`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
}

export const getProductById = async (id: number) => {
  return fetch(`${envVariables.API_URL}/products/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
}
