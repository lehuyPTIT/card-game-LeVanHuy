import { config } from "./../configs";
import { Sequelize } from "sequelize";

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = config;

class DbProvider {
  public db: Sequelize;

  constructor() {
    this.db = new Sequelize({
      dialect: "mysql",
      host: DB_HOST || 3306,
      port: DB_PORT,
      database: DB_NAME,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      define: {
        charset: "utf8",
        collate: "utf8_general_ci",
      },
      dialectOptions: {
        charset: "utf8mb4",
      },
    } as any);
  }
}

export const db = new DbProvider().db;
