import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InvoiceUpdateManyWithoutSubscriptionsInput } from "./InvoiceUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  status?: "Option1" | null;
  startDate?: Date | null;
  endDate?: Date | null;
  stripeSubscriptionId?: string | null;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  invoices?: InvoiceUpdateManyWithoutSubscriptionsInput;
};
