import { instance } from '../api'

class WorkoutLog {
  async getWorkoutLog({ id }) {
    const data = await instance.get(`workout/log/${id}`)

    return data
  }

  async getAllWorkout() {
    const data = await instance.get('workout/log/')

    return data
  }
}

export default new WorkoutLog()
