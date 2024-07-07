import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "entityName";

export const ReportTitle = (record: TReport): string => {
  return record.entityName?.toString() || String(record.id);
};
