import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SubscriptionPlanWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  features?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  subscriptions?: SubscriptionListRelationFilter;
};
