import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentIntentWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  amount?: FloatNullableFilter;
  stripePaymentIntentId?: StringNullableFilter;
  invoice?: InvoiceWhereUniqueInput;
};
