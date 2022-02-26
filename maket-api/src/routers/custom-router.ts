import { Router as ExpressRouter, NextFunction, Response } from "express";

import { IRequestExtended } from "../models";

export class Router {
  router: ExpressRouter;

  constructor(options?: any) {
    this.router = ExpressRouter(options);
  }

  all(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.all, route, ...middlewares);
  }

  get(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.get, route, ...middlewares);
  }

  post(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.post, route, ...middlewares);
  }

  put(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.put, route, ...middlewares);
  }

  delete(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.delete, route, ...middlewares);
  }

  patch(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.patch, route, ...middlewares);
  }

  use(...middlewares: any[]) {
    return this.methodWrapper(this.router.use, ...middlewares);
  }

  toExpressRequestHandler() {
    return this.router;
  }

  private methodWrapper(method: any, ...middlewares: any[]) {
    if (!method || typeof method !== "function") {
      throw new Error("Invalid parameter method");
    }

    const args = middlewares.map((middleware) => {
      if (typeof middleware === "string") {
        return middleware;
      }

      if (middleware instanceof Router) {
        return middleware.toExpressRequestHandler();
      }

      return async (
        req: IRequestExtended,
        res: Response,
        next: NextFunction
      ) => {
        try {
          await middleware(req, res);
        } catch (err) {
          return next(err);
        }

        return res;
      };
    });

    return method.call(this.router, ...args);
  }
}
