import { instance } from "../api"
import Cookies from "js-cookie"

class AuthService {
  async main(data) {
    const res = await instance.post(`/auth/${data.type}`, {
      email: data.mail,
      password: data.password,
    })

    console.log(res)
    

    if (res.data.token) {
      Cookies.set("token", res.data.token)
      console.log(res.data.token)
    }

    return res
  }
}

export default new AuthService()
