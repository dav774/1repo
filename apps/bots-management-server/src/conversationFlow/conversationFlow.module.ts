import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationFlowModuleBase } from "./base/conversationFlow.module.base";
import { ConversationFlowService } from "./conversationFlow.service";
import { ConversationFlowController } from "./conversationFlow.controller";
import { ConversationFlowResolver } from "./conversationFlow.resolver";

@Module({
  imports: [ConversationFlowModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConversationFlowController],
  providers: [ConversationFlowService, ConversationFlowResolver],
  exports: [ConversationFlowService],
})
export class ConversationFlowModule {}
