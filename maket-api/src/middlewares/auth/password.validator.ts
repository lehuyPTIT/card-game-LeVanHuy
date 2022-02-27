import { CHECK_HASH } from "../../helpers/password-haser.helper";
import { userService } from "../../services/user/user.service";
import { ErrorHandler } from "../../errors/error-handler";
import { IAuthUser } from "../../database/models/user.model";
import { IRequestExtended } from "../../models/request-extended.model";
import { NextFunction, Response } from "express";
import { ResponseStatusCodes } from "../../constants";

export const passwordValidatorMiddleware = async (
  req: IRequestExtended,
  res: Response
) => {
  const { id } = req.user as IAuthUser;
  const { password } = req.body;

  const user = await userService.getUserByPrams({ id });
  const isPasswordCorrect = await CHECK_HASH(password, user.password);
  if (!isPasswordCorrect) {
    throw new ErrorHandler(
      ResponseStatusCodes.UNAUTHORIZED,
      "Password is not correct",
      4011
    );
  }
};
