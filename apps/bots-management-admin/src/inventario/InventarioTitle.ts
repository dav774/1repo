import { Inventario as TInventario } from "../api/inventario/Inventario";

export const INVENTARIO_TITLE_FIELD = "id";

export const InventarioTitle = (record: TInventario): string => {
  return record.id?.toString() || String(record.id);
};
