import { config } from "./../configs";
import { IAuthUser } from "./../database/models/user.model";
import jwt from "jsonwebtoken";
const {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_LIFETIME,
} = config;

export const generateToken = (
  payload: Partial<Pick<IAuthUser, "email" | "id">>
): any => {
  const { id, email } = payload;
  const expiresIn: string | number = JWT_REFRESH_TOKEN_LIFETIME;

  const access_token = jwt.sign({ id, email }, JWT_ACCESS_TOKEN_SECRET, {
    expiresIn,
  });
  const refresh_token = jwt.sign(payload, JWT_REFRESH_TOKEN_SECRET, {
    expiresIn,
  });

  return { access_token, refresh_token };
};
