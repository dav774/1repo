import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { PaymentIntentCreateNestedManyWithoutInvoicesInput } from "./PaymentIntentCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  amountDue?: number | null;
  status?: "Option1" | null;
  stripeInvoiceId?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  paymentIntents?: PaymentIntentCreateNestedManyWithoutInvoicesInput;
};
