import express from 'express'
import { createNewExersice,getExersices,deleteExersices,updateExersices } from './exersice.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/',protect,createNewExersice)
router.get('/',protect,getExersices)
router.delete('/:id',protect,deleteExersices)
router.put('/:id',protect,updateExersices)


export default router