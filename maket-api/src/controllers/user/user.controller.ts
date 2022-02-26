import { Response } from "express";
import { userService } from "../../services/user";
import { ResponseStatusCodes } from "./../../constants/response-status-codes.enum";
import { HASH_PASSWORD } from "./../../helpers/password-haser.helper";
import { IAuthUser } from "./../../database/models/user.model";
import { IRequestExtended } from "./../../models/request-extended.model";
class UserController {
  async createUser(req: IRequestExtended, res: Response) {
    console.log("vao");
    const user = req.body as IAuthUser;

    user.password = await HASH_PASSWORD(user.password);

    await userService.createUser(user);

    res
      .status(ResponseStatusCodes.CREATED)
      .json({ message: "Create success" })
      .end();
  }
}

export const userController = new UserController();
