
import {
  prisma
} from "../prisma.js";

//POST
//api/workout
//PRIVATE
export const createWorkout = async (req, res, next) => {

  try {
    const {name,exerciseId} = req.body

    const workout = await prisma.workout.create({
      data:{
        name,
        exercises:{
          create:exerciseId.map((id)=>{
            return { id: Number(id) };
          })
        }
      }
    })
  
    res.json(workout)

  } catch (error) {
    console.log(error)
    next(error);
  }
};


//GET
//api/workout
//PRIVATE
export const getWorkout = async (req, res, next) => {
  try {

    const workout = await prisma.workout.findMany({
      include:{
        exercises:true
      },
      orderBy:{
        createdAt:'desc'
      }
    })

    res.json(workout)

    if (!workout) {
      throw new Error('you have no workouts')
    }

  } catch (error) {
    next(error);
  }
};

//GET
//api/workout/:id
//PRIVATE
export const getOneWorkout = async (req, res, next) => {
  try {

    const workout = await prisma.workout.findUnique({
      where:{
        id: Number(req.params.id)
      },
      include:{
        exercises:true
      },
    })

   const minutes = workout.exercises.length * 2.5
   
    if (!workout) {
      throw new Error('you have not got this workout')
    }

    res.json({...workout,minutes})

  } catch (error) {
    next(error);
  }
};


//DELETE
//api/exersice/:id
//PRIVATE
export const deleteWorkout = async (req, res, next) => {
  try {
    let exercise = await prisma.workout.delete({
      where: {
        id: Number(req.params.id)
      }
    })

    res.json(exercise)

  } catch (error) {
    if (error.code = 'P2025') {
      res.status(404)
      next({message:'данная тренировка не найдена'})
    }
  }
};


//update
//api/exersice/:id
//PRIVATE
export const updateWorkout = async (req, res, next) => {
  try {
    let {name,exerciseId} = req.body
    let workout = await prisma.workout.findUnique({
      where:{
        id:  Number(req.params.id)
      },
      include:{
        exercises:true
      }
    })

   const oldExerciseIds = workout.exercises.map((exercise)=>{
    return exercise.id
   })

   exerciseId = exerciseId ? exerciseId : oldExerciseIds

    let workoutUpdate = await prisma.workout.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        name,
        exercises:{
          set: exerciseId.map((id)=>{
            return { id: Number(id) };
          })
        }
      },
      include:{
        exercises:true
      }
    })
    

    res.json(workoutUpdate)

  } catch (error) {
    if (error.code = 'P2025') {
      res.status(404)
      next(error)
    }
  }
};