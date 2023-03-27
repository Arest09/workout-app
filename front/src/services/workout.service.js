import { instance } from '../api'

class workoutSevice {
  async createworkout(data) {
    const resp = await instance.post('workout', {
      name: data.name,
      exerciseId: data.exerciseId
    })

    console.log(data)

    return resp
  }
  async getAllworkout() {
    const resp = await instance.get('workout')

    return resp
  }

  async getWorkoutById(data) {
    const resp = await instance.get(`workout/${data.id}`)

    return resp
  }

  async updateworkout(data) {
    const resp = await instance.put(`workout/${data.id}`, {
      name: data.name,
      exerciseId: data.ids
    })

    return resp
  }

  async deleteworkout(data) {
    const resp = await instance.delete(`workout/${data.id}`)

    return resp
  }
}

export default new workoutSevice()
