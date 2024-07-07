import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  platform?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
};
