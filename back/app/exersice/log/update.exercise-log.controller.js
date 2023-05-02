import { prisma } from '../../prisma.js'

//update exercise_time
//PUT
//api/exercise/log/time/:id
//PRIVATE
export const updateExerciseLogTime = async (req, res, next) => {
  try {
    const { weight, repeat, isCompleted } = req.body

    const exerciseLogTime = await prisma.exerciseTime.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })

    if (!exerciseLogTime) {
      res.status(404)
      throw new Error('подход не найден')
    }

    const exerciseLogTimeUpdate = await prisma.exerciseTime.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        weight,
        repeat,
        isCompleted
      }
    })

    res.json(exerciseLogTimeUpdate)
  } catch (error) {
    next(error)
  }
}

//update exerciseLog (isComplete)
//PATCH
//api/exercise/log/complete/:id
//PRIVATE
export const updateCompleteExerciseLog = async (req, res, next) => {
  try {
    const { isCompleted } = req.body

    const exerciseLog = await prisma.exerciseLog.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })

    if (!exerciseLog) {
      res.status(404)
      throw new Error('нет такого лога')
    }

    const exerciseLogUpdate = await prisma.exerciseLog.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        isCompleted
      },
      include: {
        exercise: true,
        workoutLog: true,
        times: true
      }
    })

    res.json(exerciseLogUpdate)
  } catch (error) {
    next(error)
  }
}
