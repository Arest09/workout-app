import express from 'express'
import { userProfile } from './user.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get('/profile',protect,userProfile)


export default router