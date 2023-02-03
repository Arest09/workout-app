import jwt from "jsonwebtoken";

export function generateToken(id) {
  let token = jwt.sign({ id }, process.env.SECRET_KEY, {expiresIn:'10d'});

  return token;
}
