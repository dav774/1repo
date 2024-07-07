import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  entityName?: string | null;
  periodStart?: Date | null;
  periodEnd?: Date | null;
  summary?: InputJsonValue;
};
