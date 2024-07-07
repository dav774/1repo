import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { SubscriptionPlanListRelationFilter } from "../subscriptionPlan/SubscriptionPlanListRelationFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { BotListRelationFilter } from "../bot/BotListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  subscriptionPlans?: SubscriptionPlanListRelationFilter;
  customers?: CustomerListRelationFilter;
  bots?: BotListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
