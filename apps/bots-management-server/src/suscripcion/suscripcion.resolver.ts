import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SuscripcionResolverBase } from "./base/suscripcion.resolver.base";
import { Suscripcion } from "./base/Suscripcion";
import { SuscripcionService } from "./suscripcion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Suscripcion)
export class SuscripcionResolver extends SuscripcionResolverBase {
  constructor(
    protected readonly service: SuscripcionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
