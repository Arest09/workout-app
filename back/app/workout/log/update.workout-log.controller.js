import { prisma } from '../../prisma.js'

//update when train in completed
//PATCH
//api/workout/log/complete/:id
//PRIVATE

export const updateCompleteWorkoutLog = async (req, res, next) => {
  try {
    const workoutLog = await prisma.workoutLog.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        isCompleted: true
      }
    })

    if (!workoutLog) {
      res.status(404)
      throw new Error('нет такого workoutlog')
    }

    res.json({ workoutLog })
  } catch (error) {
    next(error)
  }
}
