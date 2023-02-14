import { prisma } from "../../prisma.js"
import { CalcMinutes } from "../../utils/time.train.js"

export const getOneWorkoutLog = async (req, res, next) => {
  try {
    const workoutLog = await prisma.workoutLog.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        workout: {
          include: {
            exercises: true,
          },
        },
        exerciseLogs: {
          orderBy: {
            id: "asc",
          },
          include: {
            exercise: true,
          },
        },
      },
    })

    if (!workoutLog) {
      res.status(404)
      throw new Error("нет такого workoutlog")
    }

    res.json({
      ...workoutLog,
      minutes: CalcMinutes(workoutLog.exerciseLogs.length),
    })
  } catch (error) {
    next(error)
  }
}

export const getWorkoutLog = async (req, res, next) => {
  try {
    console.log(req.params.logs)
    const workoutLog = await prisma.workoutLog.findMany({
      include: {
        exerciseLogs: {
          include: {
            times: true,
            user: true,
            exercise: true,
          },
        },
      },
    })

    res.json(workoutLog)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
