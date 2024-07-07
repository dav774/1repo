import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { SubscriptionPlanUpdateManyWithoutUsersInput } from "./SubscriptionPlanUpdateManyWithoutUsersInput";
import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";
import { BotUpdateManyWithoutUsersInput } from "./BotUpdateManyWithoutUsersInput";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  payments?: PaymentUpdateManyWithoutUsersInput;
  subscriptionPlans?: SubscriptionPlanUpdateManyWithoutUsersInput;
  customers?: CustomerUpdateManyWithoutUsersInput;
  bots?: BotUpdateManyWithoutUsersInput;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
};
