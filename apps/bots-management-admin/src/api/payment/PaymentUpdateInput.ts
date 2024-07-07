import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  paymentMethod?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
