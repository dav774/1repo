import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  status?: "Option1";
  recipient?: StringNullableFilter;
};
