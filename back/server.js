import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import authRouter from './app/auth/auth.routes.js'
import exersiceRouter from './app/exersice/exersice.routes.js'
import userRouter from './app/user/user.routes.js'
import workoutRouter from './app/workout/workout.routes.js'

import { errorHandler, notFound } from './app/middleware/error.middleware.js'

import { prisma } from './app/prisma.js'

dotenv.config()

const app = express()

app.use(cors({ origin: '*' }))

const port = process.env.PORT
app.listen(port || 5000, () => {
  console.log(`listening on port ${port}`)
})

//static files
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

async function main() {
  app.use('/api/auth', authRouter)
  app.use('/api/user', userRouter)
  app.use('/api/exercise', exersiceRouter)
  app.use('/api/workout', workoutRouter)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.use(notFound)
app.use(errorHandler)
