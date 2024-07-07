import { Cliente as TCliente } from "../api/cliente/Cliente";

export const CLIENTE_TITLE_FIELD = "id";

export const ClienteTitle = (record: TCliente): string => {
  return record.id?.toString() || String(record.id);
};
