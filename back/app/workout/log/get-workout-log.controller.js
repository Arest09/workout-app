import { prisma } from '../../prisma.js'

import { CalcMinutes } from '../../utils/time.train.js'

export const getOneWorkoutLog = async (req, res, next) => {
 
  try {
    const workoutLog = await prisma.workoutLog.findFirst({
      where: {
        AND:{id:Number(req.params.id),userId:req.user.id}
      },
      include: {
        workout: {
          include: {
            exercises: true
          }
        },
        exerciseLogs: {
          orderBy: {
            id: 'asc'
          },
          include: {
            exercise: true
          }
        }
      }
    })

    if (!workoutLog) {
      res.status(404)
      throw new Error('нет такого workoutlog')
    }

    res.json({
      ...workoutLog,
      minutes: CalcMinutes(workoutLog.exerciseLogs.length)
    })
  } catch (error) {
    next(error)
  }
}

export const getWorkoutLog = async (req, res, next) => {
  console.log(req.user.id)
  try {
    const workoutLog = await prisma.workoutLog.findMany({
      where:{
        userId:req.user.id
      },
      orderBy:{
        id:'desc'
      },
      include: {
        workout: {
          include: {
            exercises: true
          }
        }
      }
    })

    if (!workoutLog) {
      res.status(404)
      throw new Error('нет логов')
    }

    res.json(workoutLog)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
