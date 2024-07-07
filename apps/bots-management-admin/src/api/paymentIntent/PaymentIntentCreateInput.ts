import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentIntentCreateInput = {
  status?: "Option1" | null;
  amount?: number | null;
  stripePaymentIntentId?: string | null;
  invoice?: InvoiceWhereUniqueInput | null;
};
