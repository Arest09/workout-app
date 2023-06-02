import { instance } from '../../api'

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
    return await instance.post(`workout/log/${id}`)
  }

  async completeWorkoutLog({ id, isCompleted }) {
    console.log(id, isCompleted)
    return await instance.patch(`/workout/log/complete/${id}`, {
      isCompleted
    })
  }
}

export default new WorkoutLog()
