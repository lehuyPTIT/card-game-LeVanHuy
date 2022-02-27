import { Transaction } from "sequelize";
import { CollectionItemDBModel, ICollectionItemModel } from "../../database";

class CollectionItemService {
  async createCollectionItem(
    data: Partial<ICollectionItemModel>,
    transaction?: Transaction
  ): Promise<ICollectionItemModel> {
    const created = await CollectionItemDBModel.create(data, { transaction });
    return created as ICollectionItemModel;
  }
}

export const collectionItemService = new CollectionItemService();
