import { ConversationFlowWhereUniqueInput } from "../conversationFlow/ConversationFlowWhereUniqueInput";

export type FlowStepUpdateInput = {
  order?: number | null;
  typeField?: "Option1" | null;
  content?: string | null;
  conversationFlow?: ConversationFlowWhereUniqueInput | null;
};
