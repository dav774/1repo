import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SuscripcionService } from "./suscripcion.service";
import { SuscripcionControllerBase } from "./base/suscripcion.controller.base";

@swagger.ApiTags("suscripcions")
@common.Controller("suscripcions")
export class SuscripcionController extends SuscripcionControllerBase {
  constructor(
    protected readonly service: SuscripcionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
