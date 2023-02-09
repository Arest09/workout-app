import express from 'express'
import { createNewExersice,getExersices,deleteExersices,updateExersices } from './exersice.controller.js';
import { createNewExerciseLog } from './log/exercise-log.controller.js';
import { getExerciseLogs,getOneExerciseLog } from './log/get-exercise-log.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { updateCompleteExerciseLog, updateExerciseLogTime } from './log/update.exercise-log.controller.js';
const router = express.Router();

router.post('/',protect,createNewExersice)
router.get('/',protect,getExersices)
router.delete('/:id',protect,deleteExersices)
router.put('/:id',protect,updateExersices)


router.get('/log',protect,getExerciseLogs)
router.get('/log/:id',protect,getOneExerciseLog)
router.post('/log/:exerciseId',protect,createNewExerciseLog)
router.put('/log/time/:id',protect,updateExerciseLogTime)
router.patch('/log/complete/:id',protect,updateCompleteExerciseLog)


export default router