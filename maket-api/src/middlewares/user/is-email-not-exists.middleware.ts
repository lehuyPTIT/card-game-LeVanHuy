import { IRequestExtended } from "./../../models/request-extended.model";
import { NextFunction, Request, Response } from "express";

import { ResponseStatusCodes } from "../../constants";
import { ErrorHandler, errors } from "../../errors";
import { userService } from "../../services/user";

export const isEmailNotExistsMiddleware = async (
  req: IRequestExtended,
  res: Response,
  next: NextFunction
) => {
  console.log("Vao");
  const { email } = req.body;
  const userWithSameEmail = await userService.getUserByPrams({ email });
  console.log(userWithSameEmail);
  if (userWithSameEmail) {
    throw new ErrorHandler(
      ResponseStatusCodes.BAD_REQUEST,
      errors.BAD_REQUEST_USER_ALREADY_EXIST.message,
      errors.BAD_REQUEST_USER_ALREADY_EXIST.code
    );
  }
  console.log("vazzzzzzzzzzzzzzzz2222222");
};
