import * as graphql from "@nestjs/graphql";
import { ConversationalInput } from "../conversationFlowModule/ConversationalInput";
import { ConversationFlowModuleService } from "./conversationflowmodule.service";

export class ConversationFlowModuleResolver {
  constructor(protected readonly service: ConversationFlowModuleService) {}

  @graphql.Mutation(() => ConversationalInput)
  async CreateConversationFlow(
    @graphql.Args()
    args: ConversationalInput
  ): Promise<ConversationalInput> {
    return this.service.CreateConversationFlow(args);
  }
}
