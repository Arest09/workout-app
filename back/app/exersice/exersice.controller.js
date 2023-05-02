import { prisma } from '../prisma.js'

//POST
//api/exersice
//PRIVATE
export const createNewExersice = async (req, res, next) => {
  try {
    const { name, times, iconPath } = req.body

    const exersice = await prisma.exercise.create({
      data: {
        name,
        times,
        iconPath,
        user: {
          connect: {
            id: req.user.id
          }
        }
      }
    })

    if (!name) {
      throw new Error('введите название упражнения')
    }

    if (!times) {
      throw new Error('установите количество подходов')
    }

    if (!iconPath) {
      throw new Error('выберите группу')
    }

    res.json(exersice)
  } catch (error) {
    next(error)
  }
}

//GET
//api/exersice
//PRIVATE
export const getExersices = async (req, res, next) => {
  try {
    const exersices = await prisma.exercise.findMany({
      where: {
        userId: req.user.id
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        exerciseLogs: true
      }
    })

    res.json(exersices)

    if (!exersices) {
      throw new Error('you have no exersice')
    }
  } catch (error) {
    next(error)
  }
}

//DELETE
//api/exersice/:id
//PRIVATE
export const deleteExersices = async (req, res, next) => {
  try {
    let exercise = await prisma.exercise.delete({
      where: {
        id: Number(req.params.id)
      }
    })

    res.json(exercise)
  } catch (error) {
    if ((error.code = 'P2025')) {
      res.status(404)
      next({ message: 'данное упражнение не найдено' })
    }
  }
}

//update
//api/exersice/:id
//PRIVATE
export const updateExersices = async (req, res, next) => {
  try {
    const { name, times, iconPath } = req.body
    let exercise = await prisma.exercise.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        name,
        times,
        iconPath
      }
    })

    res.json(exercise)
  } catch (error) {
    if ((error.code = 'P2025')) {
      res.status(404)
      next({ message: 'данное упражнение не найдено' })
    }
  }
}
