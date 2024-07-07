import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./SubscriptionCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  name?: string | null;
  price?: number | null;
  features?: string | null;
  user?: UserWhereUniqueInput | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPlansInput;
};
