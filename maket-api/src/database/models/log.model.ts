import { DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";

import { DataBaseTableNames } from "../constants";
import { CardPowerEnums } from "../constants/card.enum";
import { DBModelFieldInit } from "../db-structure.model";
import { db } from "../db.provider";

import { associative } from "./associate.decorator";

export interface ILogModel {
  id?: number;
  collection_id?: number;
  action?: number;
  created_at?: string;
  updated_at?: string;
}

const modelAttributes: DBModelFieldInit<ILogModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: {
    type: DataTypes.INTEGER,
  },
  action: {
    type: DataTypes.STRING,
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
export class LogDBModel extends Model {
  static associate({ CollectionItemDBModel }: any) {
    this.belongsTo(CollectionItemDBModel, { foreignKey: "collection_id" });
  }
}

LogDBModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseTableNames.LOG,
  tableName: DataBaseTableNames.LOG,
  createdAt: "created_at",
  updatedAt: "updated_at",
  timestamps: true,
});
