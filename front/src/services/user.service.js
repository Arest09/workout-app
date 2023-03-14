import { instance } from "../api"

class UserService {
  async getProfile() {
    const res = await instance.get(`/user/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log('shoot from user')
    return res
  }
}

export default new UserService()
