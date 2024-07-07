import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentIntentService } from "./paymentIntent.service";
import { PaymentIntentControllerBase } from "./base/paymentIntent.controller.base";

@swagger.ApiTags("paymentIntents")
@common.Controller("paymentIntents")
export class PaymentIntentController extends PaymentIntentControllerBase {
  constructor(
    protected readonly service: PaymentIntentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
