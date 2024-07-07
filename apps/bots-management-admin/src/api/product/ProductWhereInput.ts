import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  quantity?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  category?: "Option1";
  imageUrl?: StringNullableFilter;
};
