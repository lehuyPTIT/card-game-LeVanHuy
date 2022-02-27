import { DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";

import { DataBaseTableNames } from "../constants";
import { CardPowerEnums } from "../constants/card.enum";
import { DBModelFieldInit } from "../db-structure.model";
import { db } from "../db.provider";

import { associative } from "./associate.decorator";

export interface ICardModel {
  id?: number;
  name?: string;
  image?: string;
  power?: string;
  type?: string;
  price?: string;
  created_at?: string;
  updated_at?: string;
}

const modelAttributes: DBModelFieldInit<ICardModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  power: {
    type: DataTypes.INTEGER,
  },
  type: {
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
export class CardDBModel extends Model {
  static associate({ CollectionItemDBModel }: any) {
    this.belongsToMany(CollectionItemDBModel, {
      through: DataBaseTableNames.COLLECTION_ITEM,
    });
  }
}

CardDBModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseTableNames.CARD,
  tableName: DataBaseTableNames.CARD,
  createdAt: "created_at",
  timestamps: true,
});
