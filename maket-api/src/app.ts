import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ResponseStatusCodes } from "./constants";
import { authRouter } from "./routers";
class App {
  public readonly app: express.Application = express();
  constructor() {
    this.app.use(cors());
    this.app.set("jwtTokenSecret", "keySecrec");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(authRouter);
    this.app.use(this.logErrors);
    this.app.use(this.errorHandler);
  }

  private logErrors(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    next(err);
  }

  private errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.log(err);
    if (req.xhr) {
      res.status(ResponseStatusCodes.SERVER_ERROR).send({
        error: {
          message: "Request dependent error!",
          code: err.code,
          data: err.data,
        },
      });
    } else {
      if (err.parent) {
        err.message = err.parent.sqlMessage;
      }

      res.status(err.status || ResponseStatusCodes.SERVER_ERROR).json({
        error: {
          message: err.message || "Unknown Error",
          code: err.code,
          data: err.data,
        },
      });
    }
  }
}

export const app = new App().app;
