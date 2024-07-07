import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type MediaUpdateInput = {
  url?: string | null;
  typeField?: "Option1" | null;
  bot?: BotWhereUniqueInput | null;
};
