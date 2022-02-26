import {
  Router as ExpressRouter,
  NextFunction,
  Response,
  Router,
} from "express";
import { login } from "../../controllers/auth";

const router = ExpressRouter();
router.get("/", login);
export const authRouter = router;
