import { UserDBModel } from "../../database/models";
import express, { NextFunction, Request, Response } from "express";
export async function login(req: Request, res: Response, next: NextFunction) {
  const user = await UserDBModel.findAll();
  res.json({
    data: user,
  });
}
