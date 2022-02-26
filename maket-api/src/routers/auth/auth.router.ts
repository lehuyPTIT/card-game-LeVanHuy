import { passwordValidatorMiddleware } from "./../../middlewares/auth/password.validator";
import { isEmailRegisteredMiddleware } from "./../../middlewares/user/is-email-registered.middleware";
import { Router } from "../custom-router";
import { authController } from "../../controllers/auth";

const router = new Router();
router.post(
  "/",
  isEmailRegisteredMiddleware,
  passwordValidatorMiddleware,
  authController.login
);
export const authRouter = router;
