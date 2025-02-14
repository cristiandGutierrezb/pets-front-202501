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
