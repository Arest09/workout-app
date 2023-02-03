import { prisma } from "../prisma.js";
import { userFields } from "../utils/utils.user.js";

//GET
//api/users/profile
//PRIVATE

export const userProfile = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select:userFields
    });

    console.log(req.user.id)

    if (!user) {
      throw new Error("пользователь не найден");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};
