import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentIntentModuleBase } from "./base/paymentIntent.module.base";
import { PaymentIntentService } from "./paymentIntent.service";
import { PaymentIntentController } from "./paymentIntent.controller";
import { PaymentIntentResolver } from "./paymentIntent.resolver";

@Module({
  imports: [PaymentIntentModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentIntentController],
  providers: [PaymentIntentService, PaymentIntentResolver],
  exports: [PaymentIntentService],
})
export class PaymentIntentModule {}
