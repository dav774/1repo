import { SortOrder } from "../../util/SortOrder";

export type PaymentIntentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  amount?: SortOrder;
  stripePaymentIntentId?: SortOrder;
  invoiceId?: SortOrder;
};
