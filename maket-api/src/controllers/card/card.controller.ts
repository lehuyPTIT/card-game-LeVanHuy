import { logService } from "./../../services/log/log.service";
import { Transaction } from "sequelize";
import {
  cardService,
  collectionItemService,
  userService,
} from "./../../services";
import { IRequestExtended } from "./../../models/request-extended.model";
import { NextFunction, Response } from "express";
import { ErrorHandler, errors } from "../../errors";
import { ActionLogEnum } from "../../constants";
class CardController {
  async getAllCard(req: IRequestExtended, res: Response) {
    const dbResult = await cardService.getAll();
    res.json({ data: dbResult });
  }
  async getAllCardByUser(req: IRequestExtended, res: Response) {
    const dbResult = await cardService.getAllCardByUser(req);
    res.json({ data: dbResult });
  }

  async buyCard(
    req: IRequestExtended,
    res: Response,
    transaction: Transaction
  ) {
    const id = req.user?.id;
    const { card_id } = req.body;
    if (!id) {
      throw new ErrorHandler(
        errors.BAD_REQUEST.code,
        "Parameter 'id' is required."
      );
    }

    const user = await userService.getUserByPrams(
      { id },
      { attributes: ["id", "email", "coins"] }
    );

    const card = await cardService.getCardById(card_id);
    if (card) {
      throw new ErrorHandler(errors.BAD_REQUEST.code, "Card is not exits!");
    }

    if (user.coins < card.price) {
      throw new ErrorHandler(
        errors.BAD_REQUEST.code,
        "Users don't have enough coins !"
      );
    }
    const dataCollectionItem = {
      user_id: id,
      card_id,
      quantity: 1,
      total_price: card.price,
      status: ActionLogEnum.BUY,
    };

    const collectionItem = await collectionItemService.createCollectionItem(
      dataCollectionItem,
      transaction
    );
    await logService.createLog(
      { collection_id: collectionItem.id, action: ActionLogEnum.BUY },
      transaction
    );
    return res.json({
      data: { collectionItem },
    });
  }
}
export const cardController = new CardController();
