import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { SubscriptionPlanCreateNestedManyWithoutUsersInput } from "./SubscriptionPlanCreateNestedManyWithoutUsersInput";
import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";
import { BotCreateNestedManyWithoutUsersInput } from "./BotCreateNestedManyWithoutUsersInput";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  subscriptionPlans?: SubscriptionPlanCreateNestedManyWithoutUsersInput;
  customers?: CustomerCreateNestedManyWithoutUsersInput;
  bots?: BotCreateNestedManyWithoutUsersInput;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
};
