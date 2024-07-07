import { JsonValue } from "type-fest";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entityName: string | null;
  periodStart: Date | null;
  periodEnd: Date | null;
  summary: JsonValue;
};
