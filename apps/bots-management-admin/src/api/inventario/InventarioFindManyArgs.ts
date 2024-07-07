import { InventarioWhereInput } from "./InventarioWhereInput";
import { InventarioOrderByInput } from "./InventarioOrderByInput";

export type InventarioFindManyArgs = {
  where?: InventarioWhereInput;
  orderBy?: Array<InventarioOrderByInput>;
  skip?: number;
  take?: number;
};
