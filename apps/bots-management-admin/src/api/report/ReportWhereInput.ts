import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  entityName?: StringNullableFilter;
  periodStart?: DateTimeNullableFilter;
  periodEnd?: DateTimeNullableFilter;
  summary?: JsonFilter;
};
