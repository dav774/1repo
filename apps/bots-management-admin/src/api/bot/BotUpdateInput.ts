import { MediaUpdateManyWithoutBotsInput } from "./MediaUpdateManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotUpdateInput = {
  platform?: "Option1" | null;
  name?: string | null;
  mediaItems?: MediaUpdateManyWithoutBotsInput;
  user?: UserWhereUniqueInput | null;
};
