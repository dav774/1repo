import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentIntentUpdateInput = {
  status?: "Option1" | null;
  amount?: number | null;
  stripePaymentIntentId?: string | null;
  invoice?: InvoiceWhereUniqueInput | null;
};
