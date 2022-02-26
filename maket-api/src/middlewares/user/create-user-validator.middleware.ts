import { NextFunction, Response } from "express";
import Joi from "joi";

import { ResponseStatusCodes } from "../../constants";
import { ErrorHandler } from "../../errors";
import { IRequestExtended } from "../../models";
import { createUserValidator } from "../../validators";

export const createUserValidatorMiddleware = (
  req: IRequestExtended,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const userValidity: Joi.ValidationResult<any> = createUserValidator.validate({
    email,
    password,
  });
  if (userValidity.error) {
    throw new ErrorHandler(
      ResponseStatusCodes.BAD_REQUEST,
      userValidity.error.details[0].message
    );
  }
};
