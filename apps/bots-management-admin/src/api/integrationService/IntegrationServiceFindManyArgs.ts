import { IntegrationServiceWhereInput } from "./IntegrationServiceWhereInput";
import { IntegrationServiceOrderByInput } from "./IntegrationServiceOrderByInput";

export type IntegrationServiceFindManyArgs = {
  where?: IntegrationServiceWhereInput;
  orderBy?: Array<IntegrationServiceOrderByInput>;
  skip?: number;
  take?: number;
};
