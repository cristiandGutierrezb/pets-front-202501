import { z } from 'zod'

export const loginScheme = z.object({
  email: z.string()
          .min(5, { message: "Se requiere minimo 5 caracteres" }),
  password: z.string()
          .min(5, { message: "Se requiere minimo 5 caracteres" })
})