import Cookies from 'js-cookie'

import { instance } from '../api'

class AuthService {
  async main(data) {
    const res = await instance.post(`/auth/${data.type}`, {
      email: data.mail,
      password: data.password
    })

    if (res.data.token) {
      Cookies.set('token', res.data.token)
    }
  }
}

export default new AuthService()
