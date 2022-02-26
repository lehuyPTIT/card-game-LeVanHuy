import http from "http";

import { app } from "./app";
const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`App listening on port ${port}!`));
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
