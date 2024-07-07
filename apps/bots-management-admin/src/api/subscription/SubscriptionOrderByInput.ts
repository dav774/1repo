import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  stripeSubscriptionId?: SortOrder;
  subscriptionPlanId?: SortOrder;
  userId?: SortOrder;
};
