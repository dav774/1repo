import * as graphql from "@nestjs/graphql";
import { StripeModuleService } from "./stripemodule.service";

export class StripeModuleResolver {
  constructor(protected readonly service: StripeModuleService) {}
}
