import { Sequelize } from "sequelize";

const DB_USERNAME = process.env.DB_USERNAME || "dev";
const DB_PASSWORD = process.env.DB_PASSWORD || "123456";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_NAME = process.env.DB_NAME || "maket_db";

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
