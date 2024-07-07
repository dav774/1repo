import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IntegrationServiceService } from "./integrationService.service";
import { IntegrationServiceControllerBase } from "./base/integrationService.controller.base";

@swagger.ApiTags("integrationServices")
@common.Controller("integrationServices")
export class IntegrationServiceController extends IntegrationServiceControllerBase {
  constructor(
    protected readonly service: IntegrationServiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
