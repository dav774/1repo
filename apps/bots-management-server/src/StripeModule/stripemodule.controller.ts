import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StripeModuleService } from "./stripemodule.service";

@swagger.ApiTags("stripeModules")
@common.Controller("stripeModules")
export class StripeModuleController {
  constructor(protected readonly service: StripeModuleService) {}
}
