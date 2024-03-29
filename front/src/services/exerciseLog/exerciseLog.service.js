import { instance } from '../../api'

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

  async updateTime({ timeId, body }) {
    return await instance.put(`exercise/log/time/${timeId}`, body)
  }

  async complete({ id, isCompleted }) {
    console.log(id, isCompleted)
    return await instance.patch(`exercise/log/complete/${id}`, {
      isCompleted
    })
  }
}

export default new exerciseLog()
