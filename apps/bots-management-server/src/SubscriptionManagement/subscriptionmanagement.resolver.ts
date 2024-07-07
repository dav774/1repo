import * as graphql from "@nestjs/graphql";
import { CreatePaymentInput } from "../subscriptionManagement/CreatePaymentInput";
import { Payment } from "../payment/base/Payment";
import { CreateSubscriptionInput } from "../subscriptionManagement/CreateSubscriptionInput";
import { Subscription } from "../subscription/base/Subscription";
import { PaymentWhereUniqueInput } from "../payment/base/PaymentWhereUniqueInput";
import { PaymentFindManyArgs } from "../payment/base/PaymentFindManyArgs";
import { SubscriptionManagementService } from "./subscriptionmanagement.service";

export class SubscriptionManagementResolver {
  constructor(protected readonly service: SubscriptionManagementService) {}

  @graphql.Mutation(() => Payment)
  async CreatePayment(
    @graphql.Args()
    args: CreatePaymentInput
  ): Promise<Payment> {
    return this.service.CreatePayment(args);
  }

  @graphql.Mutation(() => Subscription)
  async CreateSubscription(
    @graphql.Args()
    args: CreateSubscriptionInput
  ): Promise<Subscription> {
    return this.service.CreateSubscription(args);
  }

  @graphql.Query(() => Payment)
  async GetPayment(
    @graphql.Args()
    args: PaymentWhereUniqueInput
  ): Promise<Payment> {
    return this.service.GetPayment(args);
  }

  @graphql.Query(() => [Payment])
  async ListPayments(
    @graphql.Args()
    args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.service.ListPayments(args);
  }
}
