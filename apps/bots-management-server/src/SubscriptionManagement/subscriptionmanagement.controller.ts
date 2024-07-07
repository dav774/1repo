import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SubscriptionManagementService } from "./subscriptionmanagement.service";
import { PaymentFindManyArgs } from "../payment/base/PaymentFindManyArgs";
import { Payment } from "../payment/base/Payment";
import { Subscription } from "../subscription/base/Subscription";

@swagger.ApiTags("subscriptionManagements")
@common.Controller("subscriptionManagements")
export class SubscriptionManagementController {
  constructor(protected readonly service: SubscriptionManagementService) {}

  @common.Post("/payments")
  @swagger.ApiOkResponse({
    type: Payment
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePayment(
    @common.Body()
    body: PaymentFindManyArgs
  ): Promise<Payment> {
        return this.service.CreatePayment(body);
      }

  @common.Post("/subscriptions")
  @swagger.ApiOkResponse({
    type: Subscription
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSubscription(
    @common.Body()
    body: PaymentFindManyArgs
  ): Promise<Subscription> {
        return this.service.CreateSubscription(body);
      }

  @common.Get("/payments/:id")
  @swagger.ApiOkResponse({
    type: Payment
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPayment(
    @common.Body()
    body: PaymentFindManyArgs
  ): Promise<Payment> {
        return this.service.GetPayment(body);
      }

  @common.Get("/payments")
  @swagger.ApiOkResponse({
    type: Payment
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListPayments(
    @common.Body()
    body: PaymentFindManyArgs
  ): Promise<Payment[]> {
        return this.service.ListPayments(body);
      }
}
