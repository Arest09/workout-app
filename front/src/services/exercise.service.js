import { instance } from "../api"

class exerciseSevice {
  async createExercise(data) {
    const resp = await instance.post("exercise", {
      name: data.name,
      times: +data.times,
      iconPath: data.image,
    })

    return resp
  }
  async getAllExercise() {
    const resp = await instance.get("exercise")

    return resp
  }
}

export default new exerciseSevice()
