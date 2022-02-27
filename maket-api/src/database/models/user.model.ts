import { DataTypes, Model, ModelAttributes } from "sequelize";
import { DataBaseTableNames } from "../constants";

import { DBModelFieldInit } from "../db-structure.model";
import { db } from "../db.provider";
import { associative } from "./associate.decorator";

export interface IAuthUser {
  id: number;
  email: string;
  password: string;
  coins: number;
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
  coins: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
  },
};

@associative
export class UserDBModel extends Model {
  static associate({ CollectionItemDBModel }: any) {
    this.belongsToMany(CollectionItemDBModel, {
      through: DataBaseTableNames.COLLECTION_ITEM,
      foreignKey: "user_id",
    });
  }
}

UserDBModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseTableNames.USER,
  tableName: DataBaseTableNames.USER,
});
