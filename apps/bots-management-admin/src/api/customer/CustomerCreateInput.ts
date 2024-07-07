import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
};
