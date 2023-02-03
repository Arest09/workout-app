import express from 'express'
const router = express.Router();

import { auth,register } from "./auth.controller.js";


router.post('/login',auth)
router.post('/register',register)


export default router;