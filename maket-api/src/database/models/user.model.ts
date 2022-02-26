import { DataTypes, Model, ModelAttributes } from "sequelize";
import { DataBaseTableNames } from "../constants";

import { DBModelFieldInit } from "../db-structure.model";
import { db } from "../db.provider";
import { associative } from "./associate.decorator";

export interface IAuthUser {
  id: number;
  email: string;
  password: string;
}

export const blackListedUsersAttributes = ["password"];

export class AuthUser {
  id: number;
  email: string;

  constructor(user: IAuthUser) {
    this.id = user.id;
    this.email = user.email;
  }
}

const modelAttributes: DBModelFieldInit<IAuthUser> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

@associative
export class UserDBModel extends Model {}

UserDBModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseTableNames.USER,
  tableName: DataBaseTableNames.USER,
});
