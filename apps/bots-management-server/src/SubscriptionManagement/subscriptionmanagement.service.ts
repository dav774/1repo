import { Injectable } from "@nestjs/common";
import { CreatePaymentInput } from "../subscriptionManagement/CreatePaymentInput";
import { Payment } from "../payment/base/Payment";
import { CreateSubscriptionInput } from "../subscriptionManagement/CreateSubscriptionInput";
import { Subscription } from "../subscription/base/Subscription";
import { PaymentWhereUniqueInput } from "../payment/base/PaymentWhereUniqueInput";
import { PaymentFindManyArgs } from "../payment/base/PaymentFindManyArgs";

@Injectable()
export class SubscriptionManagementService {
  constructor() {}
  async CreatePayment(args: CreatePaymentInput): Promise<Payment> {
    throw new Error("Not implemented");
  }
  async CreateSubscription(args: CreateSubscriptionInput): Promise<Subscription> {
    throw new Error("Not implemented");
  }
  async GetPayment(args: PaymentWhereUniqueInput): Promise<Payment> {
    throw new Error("Not implemented");
  }
  async ListPayments(args: PaymentFindManyArgs): Promise<Payment[]> {
    throw new Error("Not implemented");
  }
}
