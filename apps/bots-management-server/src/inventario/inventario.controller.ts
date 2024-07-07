import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InventarioService } from "./inventario.service";
import { InventarioControllerBase } from "./base/inventario.controller.base";

@swagger.ApiTags("inventarios")
@common.Controller("inventarios")
export class InventarioController extends InventarioControllerBase {
  constructor(
    protected readonly service: InventarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
