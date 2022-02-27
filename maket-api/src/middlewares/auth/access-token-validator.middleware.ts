import jwt from "jsonwebtoken";
import { ErrorHandler } from "./../../errors/error-handler";
import { ResponseStatusCodes } from "../../constants";
import { IRequestExtended } from "./../../models/request-extended.model";
import { RequestHeaders } from "./../../constants/request-headers.enum";
import { config } from "../../configs";
export const accessTokenValidatorMiddleware = async (
  req: IRequestExtended,
  res: Response
) => {
  const token = req
    .get(RequestHeaders.AUTHORIZATION)
    ?.replace("Bearer", "")
    .trim();
  if (!token) {
    throw new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, "No token");
  }
  console.log({ token });
  try {
    const decoded: any = jwt.verify(token, config.JWT_ACCESS_TOKEN_SECRET);
    req.user = decoded;
    console.log({ decoded });
  } catch (error) {
    throw new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, "Invalid Token");
  }
};
