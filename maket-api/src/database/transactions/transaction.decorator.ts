import {
  RequestHandler,
  TransactionalDelegateParams,
  TransactionalRequestHandler,
} from "express-serve-static-core";

import { transactionWrapper } from "./transaction.wrapper";

const transactionDecorator = <T, K extends keyof T>(
  target: T,
  key: K,
  descriptor: PropertyDescriptor
) => {
  if (!descriptor) {
    throw new Error("Cannot get property descriptor!");
  }

  const method = descriptor.value as TransactionalRequestHandler;

  if (typeof method !== "function") {
    throw new Error("Only function types supported!");
  }

  descriptor.value = (...args: Parameters<RequestHandler>) =>
    transactionWrapper(
      ...([...args, method.bind(target)] as TransactionalDelegateParams)
    );

  return descriptor;
};

export const transactional = transactionDecorator;
