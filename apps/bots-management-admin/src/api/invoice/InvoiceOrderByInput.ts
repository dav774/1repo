import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amountDue?: SortOrder;
  status?: SortOrder;
  stripeInvoiceId?: SortOrder;
  subscriptionId?: SortOrder;
};
