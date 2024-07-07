import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  sender?: StringNullableFilter;
  recipient?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
