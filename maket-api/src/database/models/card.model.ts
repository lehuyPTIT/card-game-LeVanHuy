import { DataTypes, DATE, Model, ModelAttributes, Sequelize } from "sequelize";

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
  type?: number;
  price?: number;
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
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
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
  updatedAt: "updated_at",
  timestamps: true,
});
