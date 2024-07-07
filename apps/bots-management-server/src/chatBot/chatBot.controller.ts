import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatBotService } from "./chatBot.service";
import { ChatBotControllerBase } from "./base/chatBot.controller.base";

@swagger.ApiTags("chatBots")
@common.Controller("chatBots")
export class ChatBotController extends ChatBotControllerBase {
  constructor(
    protected readonly service: ChatBotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
