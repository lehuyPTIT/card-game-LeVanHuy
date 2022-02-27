import { IRequestExtended } from "./../../models/request-extended.model";
import {
  CardDBModel,
  CollectionItemDBModel,
  ICardModel,
} from "./../../database/models";
import { ResponseStatusCodes } from "../../constants";
import { ErrorHandler, errors } from "../../errors";
import model from "sequelize/types/model";

class CardService {
  async getAll() {
    return await CardDBModel.findAll();
  }
  async getAllCardByUser(req: IRequestExtended) {
    if (!req.user) {
      throw new ErrorHandler(
        ResponseStatusCodes.UNAUTHORIZED,
        errors.UNAUTHORIZED_INVALID_TOKEN.message,
        errors.UNAUTHORIZED_INVALID_TOKEN.code
      );
    }

    return await CollectionItemDBModel.findAll({
      where: { user_id: req.user.id, status: 1 },
      include: [{ model: CardDBModel, as: "card" }],
    });
  }

  async getCardById(id: number): Promise<ICardModel> {
    return (await CardDBModel.findByPk(id)) as ICardModel;
  }
}

export const cardService = new CardService();
