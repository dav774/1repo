import { User } from "../user/User";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentMethod?: "Option1" | null;
  user?: User | null;
};
