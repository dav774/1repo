import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FlowStepService } from "./flowStep.service";
import { FlowStepControllerBase } from "./base/flowStep.controller.base";

@swagger.ApiTags("flowSteps")
@common.Controller("flowSteps")
export class FlowStepController extends FlowStepControllerBase {
  constructor(
    protected readonly service: FlowStepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
