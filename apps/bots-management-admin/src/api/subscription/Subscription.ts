import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { User } from "../user/User";
import { Invoice } from "../invoice/Invoice";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  startDate: Date | null;
  endDate: Date | null;
  stripeSubscriptionId: string | null;
  subscriptionPlan?: SubscriptionPlan | null;
  user?: User | null;
  invoices?: Array<Invoice>;
};
