import { Response, Request } from "express";

import { IAuthUser } from "../database";

export interface IRequestExtended extends Request {
  user?: Partial<IAuthUser>;
}
