import { instance } from "../api"
import Cookies from "js-cookie"

class AuthService {
  async main(data) {
    const res = await instance.post(`/auth/${data.type}`, {
      email: data.mail,
      password: data.password,
    })

    if (res.data.token) {
      Cookies.set("token", res.data.token)
    }
    console.log('shoot from auth')
    return res
  }
}

export default new AuthService()
