import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutSubscriptionsInput } from "./InvoiceCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  status?: "Option1" | null;
  startDate?: Date | null;
  endDate?: Date | null;
  stripeSubscriptionId?: string | null;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  invoices?: InvoiceCreateNestedManyWithoutSubscriptionsInput;
};
