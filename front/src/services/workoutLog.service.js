import { instance } from '../api'

class WorkoutLog {
  async getWorkoutLog({ id }) {
    const data = await instance.get(`workout/log/${id}`)

    return data
  }

  async getAllWorkoutLog() {
    const data = await instance.get('workout/log/')

    return data
  }

  async createWorkoutLog({ id }) {
    console.log({ id })
    return await instance.post(`workout/log/${id}`)
  }
}

export default new WorkoutLog()
