import { prisma } from "../prisma.js";
import { userFields } from "../utils/utils.user.js";

//GET
//api/user/profile
//PRIVATE

export const userProfile = async (req, res, next) => {
  try {

    console.log(req.user.id)
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select:userFields
    });

    

    if (!user) {
      throw new Error("пользователь не найден");
    }
    

    res.json(user);
  } catch (error) {
    next(error);
  }
};
