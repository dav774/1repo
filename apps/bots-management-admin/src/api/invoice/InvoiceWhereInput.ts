import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { PaymentIntentListRelationFilter } from "../paymentIntent/PaymentIntentListRelationFilter";

export type InvoiceWhereInput = {
  id?: StringFilter;
  amountDue?: FloatNullableFilter;
  status?: "Option1";
  stripeInvoiceId?: StringNullableFilter;
  subscription?: SubscriptionWhereUniqueInput;
  paymentIntents?: PaymentIntentListRelationFilter;
};
