import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  ENV: process.env.NODE_ENV || "local",
  PORT: parseInt((process.env.PORT as string) || "3000", 10),

  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 3306,
  DB_NAME: process.env.DB_NAME || "maket_db",
  DB_USERNAME: process.env.DB_USER || "dev",
  DB_PASSWORD: process.env.DB_PASS || "123456",

  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET || "secret",
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET || "secret",
  JWT_REFRESH_TOKEN_LIFETIME: process.env.JWT_REFRESH_TOKEN_LIFETIME || 3600,
};
