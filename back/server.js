import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import { prisma } from "./app/prisma.js"
import morgan from "morgan"
import cors from 'cors'
import authRouter from "./app/auth/auth.routes.js"
import userRouter from "./app/user/user.routes.js"
import exersiceRouter from "./app/exersice/exersice.routes.js"
import workoutRouter from "./app/workout/workout.routes.js"
import { notFound, errorHandler } from "./app/middleware/error.middleware.js"
import path from "path"

const app = express()

app.use(cors())

const port = process.env.PORT
app.listen(port || 4000, () => {
  console.log(`listening on port ${port}`)
})

//static files
const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

async function main() {
  app.use("/api/auth", authRouter)
  app.use("/api/user", userRouter)
  app.use("/api/exercise", exersiceRouter)
  app.use("/api/workout", workoutRouter)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.use(notFound)
app.use(errorHandler)
