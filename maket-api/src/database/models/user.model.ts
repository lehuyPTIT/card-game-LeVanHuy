import { DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";
import { DataBaseTableNames } from "../constants";

import { DBModelFieldInit } from "../db-structure.model";
import { db } from "../db.provider";
import { associative } from "./associate.decorator";

export interface IAuthUser {
  id?: number;
  email?: string;
  password?: string;
  coins?: number;
  created_at?: string;
  updated_at?: string;
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
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("UTC_TIMESTAMP"),
  },
  updated_at: {
    type: DataTypes.DATE,
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
  createdAt: "created_at",
  updatedAt: "updated_at",
  timestamps: true,
});
