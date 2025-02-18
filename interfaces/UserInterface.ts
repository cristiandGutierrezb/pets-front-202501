export interface UserDTO {
  name: string
  lastname: string
  phone: string
  email: string
  password: string
}

export interface UserDAO extends Omit<UserDTO, 'password'> {
  id: string
  state_id: number
}
