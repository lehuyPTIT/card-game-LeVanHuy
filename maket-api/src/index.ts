import http from "http";
import { app } from "./app";
import { config } from "./configs";
const server = http.createServer(app);
const { PORT } = config;

server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on("uncaughtException", (error: Error) => {
  console.log("Uncaught Exception:", error);
});
process.on("unhandledRejection", (error: any, promise: Promise<any>) => {
  console.log(
    "Unhandled promise rejection.",
    "Error: ",
    error,
    "Promise: ",
    promise
  );
});
