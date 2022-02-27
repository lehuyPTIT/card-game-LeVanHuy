import { processAssociations } from "./associate.decorator";

export * from "./user.model";
export * from "./collection-item.model";
export * from "./card.model";
export * from "./log.model";

processAssociations();
