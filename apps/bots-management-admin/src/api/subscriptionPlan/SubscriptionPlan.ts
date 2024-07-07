import { User } from "../user/User";
import { Subscription } from "../subscription/Subscription";

export type SubscriptionPlan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  features: string | null;
  user?: User | null;
  subscriptions?: Array<Subscription>;
};
