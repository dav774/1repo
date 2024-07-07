import { FlowStepWhereInput } from "./FlowStepWhereInput";
import { FlowStepOrderByInput } from "./FlowStepOrderByInput";

export type FlowStepFindManyArgs = {
  where?: FlowStepWhereInput;
  orderBy?: Array<FlowStepOrderByInput>;
  skip?: number;
  take?: number;
};
