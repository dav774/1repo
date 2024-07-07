import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SubscriptionUpdateManyWithoutSubscriptionPlansInput } from "./SubscriptionUpdateManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanUpdateInput = {
  name?: string | null;
  price?: number | null;
  features?: string | null;
  user?: UserWhereUniqueInput | null;
  subscriptions?: SubscriptionUpdateManyWithoutSubscriptionPlansInput;
};
