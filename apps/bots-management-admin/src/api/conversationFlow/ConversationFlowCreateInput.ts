import { FlowStepCreateNestedManyWithoutConversationFlowsInput } from "./FlowStepCreateNestedManyWithoutConversationFlowsInput";

export type ConversationFlowCreateInput = {
  name?: string | null;
  description?: string | null;
  flowSteps?: FlowStepCreateNestedManyWithoutConversationFlowsInput;
};
