import { ConversationFlow } from "../conversationFlow/ConversationFlow";

export type FlowStep = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  order: number | null;
  typeField?: "Option1" | null;
  content: string | null;
  conversationFlow?: ConversationFlow | null;
};
