import { Module } from "@nestjs/common";
import { SubscriptionManagementService } from "./subscriptionmanagement.service";
import { SubscriptionManagementController } from "./subscriptionmanagement.controller";
import { SubscriptionManagementResolver } from "./subscriptionmanagement.resolver";

@Module({
  controllers: [SubscriptionManagementController],
  providers: [SubscriptionManagementService, SubscriptionManagementResolver],
  exports: [SubscriptionManagementService],
})
export class SubscriptionManagementModule {}
