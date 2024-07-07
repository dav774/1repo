import { Suscripcion as TSuscripcion } from "../api/suscripcion/Suscripcion";

export const SUSCRIPCION_TITLE_FIELD = "id";

export const SuscripcionTitle = (record: TSuscripcion): string => {
  return record.id?.toString() || String(record.id);
};
