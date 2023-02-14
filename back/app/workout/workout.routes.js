import express from 'express'
import { createWorkout,getWorkout,deleteWorkout,updateWorkout,getOneWorkout} from './workout.controller.js';
import { createNewworkoutLog} from './log/workout-log.controller.js';
import { getOneWorkoutLog,getWorkoutLog } from './log/get-workout-log.controller.js';
import { updateCompleteWorkoutLog } from './log/update.workout-log.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get('/log/:id',protect,getOneWorkoutLog)
router.get('/log',protect,getWorkoutLog) 
router.post('/log/:id',protect,createNewworkoutLog)
router.patch('/log/complete/:id',protect,updateCompleteWorkoutLog)


router.get('/',protect,getWorkout)
router.get('/:id',protect,getOneWorkout)
router.post('/',protect,createWorkout)
router.delete('/:id',protect,deleteWorkout)
router.put('/:id',protect,updateWorkout)


export default router