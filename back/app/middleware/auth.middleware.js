import { prisma } from "../prisma.js"
import jwt from "jsonwebtoken"

export const protect = async (req, res, next) => {
  try {
    if (req.headers.authorization?.startsWith("Bearer")) {
      const token = req.headers.authorization.split(" ")[1]
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

      const user = await prisma.user.findUnique({
        where: {
          id: decodedToken.id,
        },
      })

      if (user) {
        req.user = user
        next()
      } else {
        res.status(401)
        throw new Error("не верный токен")
      }
    } else {
      res.status(401)
      throw new Error("у вас нет токена")
    }
  } catch (error) {
    next(error)
  }
}
