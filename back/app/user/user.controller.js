import { prisma } from "../prisma.js"
import { userFields } from "../utils/utils.user.js"

//GET
//api/user/profile
//PRIVATE

export const userProfile = async (req, res, next) => {
  try {
    console.log(req.user.id)
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: userFields,
    })

    if (!user) {
      throw new Error("пользователь не найден")
    }

    const countExerciseTimeCompleted = await prisma.exerciseLog.count({
      where: {
        userId: req.user.id,
        isCompleted: true,
      },
    })

    const kgs = await prisma.exerciseTime.aggregate({
      _sum: {
        weight: true,
      },
      where: {
        exerciseLog: {
          userId: req.user.id,
        },
        isCompleted: true,
      },
    })

    const workouts = await prisma.workoutLog.count({
      where: {
        isCompleted: true,
      },
    })

    res.json({
      ...user,
      statistics: [
        { label: "workouts", value: workouts },
        { label: "minutes", value: countExerciseTimeCompleted * 2 },
        { label: "kgs", value: kgs._sum.weight || 0 },
      ],
    })
  } catch (error) {
    next(error)
  }
}
