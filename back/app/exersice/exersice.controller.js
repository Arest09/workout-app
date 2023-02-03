import { prisma } from "../prisma.js";

//POST
//api/exersice
//PUBLIC
export const createNewExersice = async (req, res, next) => {
  try {
    const { name, times,iconPath } = req.body;

    const exersice = await prisma.exercise.create({
      data:{
        name,times,iconPath
      }
    })

    res.json(exersice)

  } catch (error) {
    next(error);
  }
};


//GET
//api/exersice
//PUBLIC
export const getExersices = async (req, res, next) => {
  try {

   const exersices = await prisma.exercise.findMany()

    res.json(exersices)

    if (!exersices) {
      throw new Error('you have no exersice')
    }

  } catch (error) {
    next(error);
  }
};
