import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentMethod?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
