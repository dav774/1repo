import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { PaymentIntentUpdateManyWithoutInvoicesInput } from "./PaymentIntentUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  amountDue?: number | null;
  status?: "Option1" | null;
  stripeInvoiceId?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  paymentIntents?: PaymentIntentUpdateManyWithoutInvoicesInput;
};
