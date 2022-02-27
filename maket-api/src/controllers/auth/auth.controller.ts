import { ITokens } from "./../../models/tokens.model";
import { generateToken } from "./../../helpers/token-generator.helper";
import { IRequestExtended } from "./../../models/request-extended.model";
import { IAuthUser } from "../../database/models";
import { NextFunction, Response } from "express";
class AuthController {
  async login(req: IRequestExtended, res: Response) {
    const user = req.user as IAuthUser;
    const tokens = await generateToken(user);
    return res.json({
      data: tokens,
    });
  }
}
export const authController = new AuthController();
