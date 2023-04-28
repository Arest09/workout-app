import { prisma } from '../../prisma.js'

//desc making workout log
//POST
//api/workout/log/:id
//PRIVATE
export const createNewworkoutLog = async (req, res, next) => {
  try {
    const workoutId = +req.params.id

    const workout = await prisma.workout.findUnique({
      where: {
        id: workoutId,
      },

      include: {
        exercises: true
      }
    })

    if (!workout) {
      res.status(404)
      throw new Error('Workout not found!')
    }

    const workoutLog = await prisma.workoutLog.create({
      data: {
        user: {
          connect: {
            id: req.user.id
          }
        },
        workout: {
          connect: {
            id: workoutId
          }
        },
        exerciseLogs: {
          create: workout.exercises.map(exercise => {
            return {
              user: {
                connect: {
                  id: req.user.id
                }
              },
              exercise: {
                connect: {
                  id: exercise.id
                }
              },
              times: {
                create: Array.from({ length: exercise.times }, () => {
                  return {
                    weight: 0,
                    repeat: 0
                  }
                })
              }
            }
          })
        }
      },
      include: {
        exerciseLogs: {
          include: {
            times: true,
            exercise: true
          }
        }
      }
    })

    res.json(workoutLog)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
