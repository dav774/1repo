import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type MediaWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  typeField?: "Option1";
  bot?: BotWhereUniqueInput;
};
