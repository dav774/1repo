import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConversationFlowResolverBase } from "./base/conversationFlow.resolver.base";
import { ConversationFlow } from "./base/ConversationFlow";
import { ConversationFlowService } from "./conversationFlow.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConversationFlow)
export class ConversationFlowResolver extends ConversationFlowResolverBase {
  constructor(
    protected readonly service: ConversationFlowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
