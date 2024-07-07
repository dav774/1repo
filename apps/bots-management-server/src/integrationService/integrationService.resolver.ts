import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IntegrationServiceResolverBase } from "./base/integrationService.resolver.base";
import { IntegrationService } from "./base/IntegrationService";
import { IntegrationServiceService } from "./integrationService.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IntegrationService)
export class IntegrationServiceResolver extends IntegrationServiceResolverBase {
  constructor(
    protected readonly service: IntegrationServiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
