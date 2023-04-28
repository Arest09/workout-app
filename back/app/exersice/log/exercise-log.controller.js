import { prisma } from '../../prisma.js'

//POST
//api/exercise/log/:exerciseId
//PRIVATE
export const createNewExerciseLog = async (req, res, next) => {
  try {
    const exerciseId = Number(req.params.exerciseId)

    const exercise = await prisma.exercise.findUnique({
      where: {
        id: exerciseId
      }
    })

    let timeDefault = []

    if (!exercise) {
      throw new Error('нет такого упражнения')
    }

    for (let i = 0; i < exercise.times; i++) {
      timeDefault.push({ weight: 0, repeat: 0 })
    }

    const exersiceLog = await prisma.exerciseLog.create({
      data: {
        user: {
          connect: {
            id: req.user.id
          }
        },
        exercise: {
          connect: {
            id: exerciseId
          }
        },
        times: {
          createMany: {
            data: timeDefault
          }
        }
      },
      include: {
        times: true
      }
    })

    res.json(exersiceLog)
  } catch (error) {
    next(error)
  }
}
