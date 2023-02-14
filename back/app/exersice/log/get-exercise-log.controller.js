import { prisma } from "../../prisma.js";
import { addPrevValues } from "./add-prev-values.util.js";




//GET
//api/exercise/log/:exerciseId
//PRIVATE
export const getOneExerciseLog = async (req, res, next) => {
    try {
       const exerciseLog = await prisma.exerciseLog.findUnique({
        where:{
            id:Number(req.params.id),
            
        },
        include:{
            times:true,
            exercise:true
        }
       });
       

       if (!exerciseLog) {
        res.status(404)
        throw new Error('нет логов')
       }


       const prevExerciseLog = await prisma.exerciseLog.findFirst({
        orderBy:{
            createdAt:'desc'
        },
        where:{
            exerciseId:exerciseLog.exerciseId,
            isCompleted:true,
            userId:req.user.id,
        }
       })

       const newTimes = addPrevValues(exerciseLog,prevExerciseLog)

       

       res.json({...exerciseLog,times:newTimes})
    } catch (error) {
        next(error)
    }
}



//GET
//api/exercise/log/
//PRIVATE
export const getExerciseLogs = async (req, res, next) => {
    try {
       const exerciseLogs = await prisma.exerciseLog.findMany({
        
        include:{
            times:true,
            exercise:true,
        },
        orderBy:{
          createdAt:"desc"
        }
       });
       

       if (!exerciseLogs) {
        res.status(404)
        throw new Error('нет логов')
       }

       res.json(exerciseLogs)
    } catch (error) {
        next(error)
    }
}