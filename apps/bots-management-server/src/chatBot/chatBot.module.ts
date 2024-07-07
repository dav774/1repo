import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatBotModuleBase } from "./base/chatBot.module.base";
import { ChatBotService } from "./chatBot.service";
import { ChatBotController } from "./chatBot.controller";
import { ChatBotResolver } from "./chatBot.resolver";

@Module({
  imports: [ChatBotModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatBotController],
  providers: [ChatBotService, ChatBotResolver],
  exports: [ChatBotService],
})
export class ChatBotModule {}
