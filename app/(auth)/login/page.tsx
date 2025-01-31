import ScreenLogin from "@/modules/auth/ScreenLogin"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login for pets",
  description: "Login to your account to access your pets",
}

export default function LoginPage() {

  return <ScreenLogin />

}
