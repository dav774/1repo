import { SortOrder } from "../../util/SortOrder";

export type UsuarioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nombre?: SortOrder;
  correoElectronico?: SortOrder;
  contraseA?: SortOrder;
};
