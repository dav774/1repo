import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentIntentResolverBase } from "./base/paymentIntent.resolver.base";
import { PaymentIntent } from "./base/PaymentIntent";
import { PaymentIntentService } from "./paymentIntent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentIntent)
export class PaymentIntentResolver extends PaymentIntentResolverBase {
  constructor(
    protected readonly service: PaymentIntentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
