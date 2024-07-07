import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IntegrationServiceWhereInput = {
  id?: StringFilter;
  apiEndpoint?: StringNullableFilter;
  apiKey?: StringNullableFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
};
