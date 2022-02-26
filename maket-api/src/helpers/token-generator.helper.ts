import { IAuthUser } from "./../database/models/user.model";
import jwt from "jsonwebtoken";
const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET || "test";
const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET || "key";
const JWT_REFRESH_TOKEN_LIFETIME =
  process.env.JWT_REFRESH_TOKEN_LIFETIME || 3600;

export const generateToken = (
  payload: Partial<Pick<IAuthUser, "email" | "id">>
): any => {
  const expiresIn: string | number = JWT_REFRESH_TOKEN_LIFETIME;

  const access_token = jwt.sign(payload, JWT_ACCESS_TOKEN_SECRET, {
    expiresIn,
  });
  const refresh_token = jwt.sign(payload, JWT_REFRESH_TOKEN_SECRET, {
    expiresIn,
  });

  return { access_token, refresh_token };
};
