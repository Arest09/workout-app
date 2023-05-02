import { instance } from '../api'

class exerciseLog {
  async getexerciseLog({ id }) {
    const data = await instance.get(`exercise/log/${id}`)

    return data
  }

  async getAllWorkout() {
    const data = await instance.get('exercise/log/')

    return data
  }

  async createexerciseLog({ id }) {
    return await instance.post(`exercise/log/${id}`)
  }
}

export default new exerciseLog()
