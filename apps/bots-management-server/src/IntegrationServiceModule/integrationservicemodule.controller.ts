import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IntegrationServiceModuleService } from "./integrationservicemodule.service";

@swagger.ApiTags("integrationServiceModules")
@common.Controller("integrationServiceModules")
export class IntegrationServiceModuleController {
  constructor(protected readonly service: IntegrationServiceModuleService) {}
}
