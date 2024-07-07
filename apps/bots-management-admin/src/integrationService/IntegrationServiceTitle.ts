import { IntegrationService as TIntegrationService } from "../api/integrationService/IntegrationService";

export const INTEGRATIONSERVICE_TITLE_FIELD = "name";

export const IntegrationServiceTitle = (
  record: TIntegrationService
): string => {
  return record.name?.toString() || String(record.id);
};
