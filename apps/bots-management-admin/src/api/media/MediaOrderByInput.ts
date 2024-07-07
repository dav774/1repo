import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  typeField?: SortOrder;
  botId?: SortOrder;
};
