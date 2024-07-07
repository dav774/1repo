import { FlowStep as TFlowStep } from "../api/flowStep/FlowStep";

export const FLOWSTEP_TITLE_FIELD = "id";

export const FlowStepTitle = (record: TFlowStep): string => {
  return record.id?.toString() || String(record.id);
};
