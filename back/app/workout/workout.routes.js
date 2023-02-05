import express from 'express'
import { createWorkout,getWorkout,deleteWorkout,updateWorkout,getOneWorkout} from './workout.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/',protect,createWorkout)
router.get('/',protect,getWorkout)
router.get('/:id',protect,getOneWorkout)
router.delete('/:id',protect,deleteWorkout)
router.put('/:id',protect,updateWorkout)


export default router