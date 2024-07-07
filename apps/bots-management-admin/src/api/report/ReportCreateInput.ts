import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  entityName?: string | null;
  periodStart?: Date | null;
  periodEnd?: Date | null;
  summary?: InputJsonValue;
};
