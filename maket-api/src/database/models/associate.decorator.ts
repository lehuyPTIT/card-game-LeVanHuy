enum DdModelNameEnum {
  ActionTokenDBModel,
  OAuthTokenDBModel,
  UserDBModel,
  UserStatusDBModel,
}

export type IDBModelMap = {
  [key in keyof typeof DdModelNameEnum]: any;
};

const models: any = {};

const associateDecorator = (target: any) => {
  if (!target) {
    throw new Error("Cannot get property target!");
  }

  models[target.name] = target;

  return target;
};

export const associative = associateDecorator;

export const processAssociations = () => {
  Object.values(models).forEach((model: any) => {
    if (model.associate && typeof model.associate === "function") {
      model.associate(models as IDBModelMap);
    }
  });
};
