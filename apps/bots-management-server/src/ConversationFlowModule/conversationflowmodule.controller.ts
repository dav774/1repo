import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConversationFlowModuleService } from "./conversationflowmodule.service";
import { ConversationalInput } from "../conversationFlowModule/ConversationalInput";

@swagger.ApiTags("conversationFlowModules")
@common.Controller("conversationFlowModules")
export class ConversationFlowModuleController {
  constructor(protected readonly service: ConversationFlowModuleService) {}

  @common.Post("/conversation-flows")
  @swagger.ApiOkResponse({
    type: ConversationalInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateConversationFlow(
    @common.Body()
    body: ConversationalInput
  ): Promise<ConversationalInput> {
        return this.service.CreateConversationFlow(body);
      }
}
