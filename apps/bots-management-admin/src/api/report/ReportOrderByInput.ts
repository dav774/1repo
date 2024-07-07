import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  entityName?: SortOrder;
  periodStart?: SortOrder;
  periodEnd?: SortOrder;
  summary?: SortOrder;
};
