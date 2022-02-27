import { config } from "./";

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = config;

module.exports = {
  development: {
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
  },
  test: {
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
  },
  production: {
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
  },
};
