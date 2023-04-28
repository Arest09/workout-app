import express from 'express'

import { auth, register } from './auth.controller.js'

const router = express.Router()

router.post('/login', auth)
router.post('/register', register)

export default router
