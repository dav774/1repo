import { SortOrder } from "../../util/SortOrder";

export type IntegrationServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  apiEndpoint?: SortOrder;
  apiKey?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
};
