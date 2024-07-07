import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "stripeSubscriptionId";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.stripeSubscriptionId?.toString() || String(record.id);
};
