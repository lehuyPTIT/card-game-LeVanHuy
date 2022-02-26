import { IAuthUser, UserDBModel } from "./../../database/models/user.model";
import { Op, Transaction, WhereOptions } from "sequelize";
type CreateAuthUser = Partial<Omit<IAuthUser, "id">>;
class UserService {
  createUser(
    user: CreateAuthUser,
    transaction?: Transaction
  ): Promise<IAuthUser> {
    return UserDBModel.create(user, {
      transaction,
      raw: true,
    }) as any;
  }
  async getUserByPrams(
    findObject: WhereOptions,
    attributes?: (keyof IAuthUser)[] | any
  ): Promise<IAuthUser> {
    const dbResult = (await UserDBModel.findOne({
      where: findObject,
      attributes,
    })) as any;
    return dbResult?.toJSON();
  }
}

export const userService = new UserService();
