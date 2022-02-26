import { ErrorHandler } from "./../../errors/error-handler";
import { ResponseStatusCodes } from "../../constants";
import { IRequestExtended } from "./../../models/request-extended.model";
import { RequestHeaders } from "./../../constants/request-headers.enum";
export const accessTokenValidatorMiddleware = async (
  req: IRequestExtended,
  res: Response
) => {
  const token = req.get(RequestHeaders.AUTHORIZATION)?.replace("Bearer", "");
  if (!token) {
    throw new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, "No token");
  }
};
