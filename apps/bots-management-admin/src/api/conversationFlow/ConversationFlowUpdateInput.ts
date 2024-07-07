import { FlowStepUpdateManyWithoutConversationFlowsInput } from "./FlowStepUpdateManyWithoutConversationFlowsInput";

export type ConversationFlowUpdateInput = {
  name?: string | null;
  description?: string | null;
  flowSteps?: FlowStepUpdateManyWithoutConversationFlowsInput;
};
