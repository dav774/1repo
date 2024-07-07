import { FlowStep } from "../flowStep/FlowStep";

export type ConversationFlow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  flowSteps?: Array<FlowStep>;
};
