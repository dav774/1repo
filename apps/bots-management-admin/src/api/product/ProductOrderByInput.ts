import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  quantity?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  category?: SortOrder;
  imageUrl?: SortOrder;
};
