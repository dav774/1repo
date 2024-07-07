import { MediaCreateNestedManyWithoutBotsInput } from "./MediaCreateNestedManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotCreateInput = {
  platform?: "Option1" | null;
  name?: string | null;
  mediaItems?: MediaCreateNestedManyWithoutBotsInput;
  user?: UserWhereUniqueInput | null;
};
