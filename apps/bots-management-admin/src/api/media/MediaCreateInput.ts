import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type MediaCreateInput = {
  url?: string | null;
  typeField?: "Option1" | null;
  bot?: BotWhereUniqueInput | null;
};
