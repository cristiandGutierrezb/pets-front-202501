import { LoginDTO } from "@/interfaces/LoginInterface"

const apiUrl = 'http://localhost:3333/api/v1'

export const authenticationUser = async (body: LoginDTO) => {
  const headerOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json"
    }
  }
  return await fetch(`${apiUrl}/user/`, headerOptions)
          .then(data => data.json())
}