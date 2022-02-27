import { DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";
import { UserDBModel } from ".";

import { DataBaseTableNames } from "../constants";
import { CardPowerEnums } from "../constants/card.enum";
import { DBModelFieldInit } from "../db-structure.model";
import { db } from "../db.provider";

import { associative } from "./associate.decorator";

export interface ICollectionItemModel {
  id?: number;
  user_id?: number;
  card_id?: number;
  status?: number;
  quantity?: number;
  total_price?: number;
  created_at?: string;
  updated_at?: string;
}

const modelAttributes: DBModelFieldInit<ICollectionItemModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  card_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  total_price: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("UTC_TIMESTAMP"),
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("UTC_TIMESTAMP"),
  },
};

@associative
export class CollectionItemDBModel extends Model {
  static associate({ UserDbModel, LogDBModel, CardDBModel }: any) {
    this.belongsTo(UserDbModel, { foreignKey: "user_id" });
    this.belongsTo(CardDBModel, { foreignKey: "card_id" });
    this.belongsToMany(LogDBModel, {
      through: DataBaseTableNames.LOG,
    });
  }
}

CollectionItemDBModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseTableNames.CARD,
  tableName: DataBaseTableNames.CARD,
  createdAt: "created_at",
  updatedAt: "updated_at",
  timestamps: true,
});
