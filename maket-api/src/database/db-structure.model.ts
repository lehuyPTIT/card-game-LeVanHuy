import { ModelAttributeColumnOptions } from "sequelize";

export type DBModelFieldInit<T> = {
  [P in keyof T]: ModelAttributeColumnOptions;
};
