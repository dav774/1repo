import { Module } from "@nestjs/common";
import { ConversationFlowModuleService } from "./conversationflowmodule.service";
import { ConversationFlowModuleController } from "./conversationflowmodule.controller";
import { ConversationFlowModuleResolver } from "./conversationflowmodule.resolver";

@Module({
  controllers: [ConversationFlowModuleController],
  providers: [ConversationFlowModuleService, ConversationFlowModuleResolver],
  exports: [ConversationFlowModuleService],
})
export class ConversationFlowModuleModule {}
