import {
  Router as ExpressRouter,
  NextFunction,
  Response,
  Router,
} from "express";

const router = ExpressRouter();
router.get("/", (req, res) => {
  res.json({
    data: "asdasd",
  });
});
export const authRouter = router;
