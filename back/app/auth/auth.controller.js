import { prisma } from "../prisma.js";
import  argon from "argon2";
import { generateToken } from "./generateToken.js";
import { userFields } from "../utils/utils.user.js";



//POST
//api/auth/login
//PUBLIC
export const auth = async (req, res,next) => {
  const {email,password} = req.body;

  try {
    const user = await prisma.user.findUnique({
      where:{
        email:email
      }
    });

   
    if (!user) {
      res.status(401)
      throw new Error('пользователь не найден')
    }

    const passwordVerify = await argon.verify(user.password,password)

    if(!passwordVerify){
      res.status(401)
      throw new Error('не верный пароль')
    }

    let token = generateToken(user.id)

   

    res.json({user,token});
  } catch (error) {
    next(error);
  }
};

//POST
//api/auth/register
//PUBLIC

export const register = async (req, res, next) => {
  try {
    const { name, email, password, images } = req.body;

    let isExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isExist) {
      res.status(400);
      throw new Error("такой email уже зарегестрирован");
    }

    let user = await prisma.user.create({
      data: {
        email,
        password:await argon.hash(password),
        name,
      },
      select:userFields
    });

    let token = generateToken(user.id)


    res.json({user,token});
  } catch (error) {
    next(error);
  }
};
