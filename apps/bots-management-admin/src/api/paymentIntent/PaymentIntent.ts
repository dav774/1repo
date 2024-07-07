import { Invoice } from "../invoice/Invoice";

export type PaymentIntent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  amount: number | null;
  stripePaymentIntentId: string | null;
  invoice?: Invoice | null;
};
