import { Subscription } from "../subscription/Subscription";
import { PaymentIntent } from "../paymentIntent/PaymentIntent";

export type Invoice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amountDue: number | null;
  status?: "Option1" | null;
  stripeInvoiceId: string | null;
  subscription?: Subscription | null;
  paymentIntents?: Array<PaymentIntent>;
};
