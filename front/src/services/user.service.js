import { instance } from '../api'

class UserService {
  async getProfile() {
    const res = await instance.get(`/user/profile`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res
  }
}

export default new UserService()
