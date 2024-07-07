import { SortOrder } from "../../util/SortOrder";

export type FlowStepOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  order?: SortOrder;
  typeField?: SortOrder;
  content?: SortOrder;
  conversationFlowId?: SortOrder;
};
