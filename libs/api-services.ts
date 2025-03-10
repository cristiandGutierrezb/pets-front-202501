import { LoginDTO } from "@/interfaces/LoginInterface"

export const loginUser = (body: LoginDTO) => {
  const headersOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Authorization": "Bearer tokentosendinservice"
    }
  }
  fetch('', headersOptions)
}

export const getListProducts = async () => {
  const headersOptions = {
    method: 'GET'
  }
  return await fetch('http://localhost:3333/api/v1/products', headersOptions)
          .then(data => data.json())
}

