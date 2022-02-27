import { IRequestExtended } from "./../../models/request-extended.model";
import { userService } from "./../../services/user/user.service";
import { Response, Request, NextFunction } from "express";
import Joi from "joi";
import { ResponseStatusCodes } from "../../constants";
import { ErrorHandler, errors } from "../../errors";
import { emailValidator } from "../../validators";
export const isEmailRegisteredMiddleware = async (
  req: IRequestExtended,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const emailValidity: Joi.ValidationResult<any> = emailValidator.validate({
    email,
  });
  if (emailValidity.error) {
    throw new ErrorHandler(
      ResponseStatusCodes.BAD_REQUEST,
      emailValidity.error.details[0].message
    );
  }
  const user = await userService.getUserByPrams({ email });
  if (!user) {
    throw new ErrorHandler(
      ResponseStatusCodes.UNAUTHORIZED,
      errors.UNAUTHORIZED_WRONG_CREDENTIALS.message,
      errors.UNAUTHORIZED_WRONG_CREDENTIALS.code
    );
  }
  console.log("vaaaaaaaaaaaaaa3");
  req.user = user;
};
