import { LogDBModel } from "./../../database/models/log.model";
import { Transaction } from "sequelize";
import { ILogModel } from "./../../database/models";

class LogService {
  async createLog(
    data: Partial<ILogModel>,
    transaction: Transaction
  ): Promise<ILogModel> {
    return (await LogDBModel.create(data, {
      transaction,
    })) as ILogModel;
  }
}

export const logService = new LogService();
