import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotWhereInput = {
  id?: StringFilter;
  platform?: "Option1";
  name?: StringNullableFilter;
  mediaItems?: MediaListRelationFilter;
  user?: UserWhereUniqueInput;
};
