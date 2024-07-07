import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClienteService } from "./cliente.service";
import { ClienteControllerBase } from "./base/cliente.controller.base";

@swagger.ApiTags("clientes")
@common.Controller("clientes")
export class ClienteController extends ClienteControllerBase {
  constructor(
    protected readonly service: ClienteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
