import { cardRouter } from "./card";
import { authRouter } from "./auth";
import { Router } from "./custom-router";
import { userRouter } from "./user";

const baseRouter = new Router();

try {
  baseRouter.use("/user", userRouter);
  baseRouter.use("/auth", authRouter);
  baseRouter.use("/card", cardRouter);
} catch (err) {
  throw err;
}

export const appRouter = baseRouter.toExpressRequestHandler();
