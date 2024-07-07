import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UsuarioWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  correoElectronico?: StringNullableFilter;
  contraseA?: StringNullableFilter;
};
