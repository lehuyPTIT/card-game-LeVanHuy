import {
  Request,
  Response,
  TransactionalRequestHandler,
} from "express-serve-static-core";

import { createTransaction } from "./create.transaction";

export const transactionWrapper = async <
  TRequest extends Request,
  TResponse extends Response
>(
  req: TRequest,
  res: TResponse,
  method: TransactionalRequestHandler
): Promise<void> => {
  const transaction = await createTransaction();

  try {
    await method(req, res, transaction);
    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    throw e;
  }
};
