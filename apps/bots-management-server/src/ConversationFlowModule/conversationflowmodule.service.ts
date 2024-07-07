import { Injectable } from "@nestjs/common";
import { ConversationalInput } from "../conversationFlowModule/ConversationalInput";

@Injectable()
export class ConversationFlowModuleService {
  constructor() {}
  async CreateConversationFlow(args: ConversationalInput): Promise<ConversationalInput> {
    throw new Error("Not implemented");
  }
}
