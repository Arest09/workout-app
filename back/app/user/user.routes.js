import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { userProfile } from './user.controller.js'

const router = express.Router()

router.get('/profile', protect, userProfile)

export default router
