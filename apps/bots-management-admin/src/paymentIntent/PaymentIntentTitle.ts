import { PaymentIntent as TPaymentIntent } from "../api/paymentIntent/PaymentIntent";

export const PAYMENTINTENT_TITLE_FIELD = "stripePaymentIntentId";

export const PaymentIntentTitle = (record: TPaymentIntent): string => {
  return record.stripePaymentIntentId?.toString() || String(record.id);
};
