import express from 'express'
import { createNewExersice,getExersices } from './exersice.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/',protect,createNewExersice)
router.get('/',protect,getExersices)


export default router