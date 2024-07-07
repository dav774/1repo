import { ConversationFlowWhereUniqueInput } from "../conversationFlow/ConversationFlowWhereUniqueInput";

export type FlowStepCreateInput = {
  order?: number | null;
  typeField?: "Option1" | null;
  content?: string | null;
  conversationFlow?: ConversationFlowWhereUniqueInput | null;
};
