import { createUserValidatorMiddleware } from "./../../middlewares/user/create-user-validator.middleware";
import { isEmailNotExistsMiddleware } from "./../../middlewares/user/is-email-not-exists.middleware";
import { userController } from "../../controllers/user";
import { Router } from "../custom-router";
const router = new Router();
router.post(
  "/",
  isEmailNotExistsMiddleware,
  createUserValidatorMiddleware,
  userController.createUser
);
export const userRouter = router;
