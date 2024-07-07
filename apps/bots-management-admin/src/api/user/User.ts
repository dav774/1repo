import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { Customer } from "../customer/Customer";
import { Bot } from "../bot/Bot";
import { Subscription } from "../subscription/Subscription";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  payments?: Array<Payment>;
  subscriptionPlans?: Array<SubscriptionPlan>;
  customers?: Array<Customer>;
  bots?: Array<Bot>;
  subscriptions?: Array<Subscription>;
};
