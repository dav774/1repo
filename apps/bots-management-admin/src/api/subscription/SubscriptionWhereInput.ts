import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  stripeSubscriptionId?: StringNullableFilter;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput;
  user?: UserWhereUniqueInput;
  invoices?: InvoiceListRelationFilter;
};
