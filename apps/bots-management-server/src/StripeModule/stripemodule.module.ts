import { Module } from "@nestjs/common";
import { StripeModuleService } from "./stripemodule.service";
import { StripeModuleController } from "./stripemodule.controller";
import { StripeModuleResolver } from "./stripemodule.resolver";

@Module({
  controllers: [StripeModuleController],
  providers: [StripeModuleService, StripeModuleResolver],
  exports: [StripeModuleService],
})
export class StripeModuleModule {}
