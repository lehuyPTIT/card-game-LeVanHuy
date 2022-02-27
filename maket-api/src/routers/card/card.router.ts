import { Router } from "../custom-router";
import { cardController } from "../../controllers";
import { accessTokenValidatorMiddleware } from "../../middlewares/auth/access-token-validator.middleware";

const router = new Router();
router.get("/", cardController.getAllCard);
router.get(
  "/",
  accessTokenValidatorMiddleware,
  cardController.getAllCardByUser
);

router.post("/buy", accessTokenValidatorMiddleware, cardController.buyCard);
export const cardRouter = router;
