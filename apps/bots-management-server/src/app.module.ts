import { Module } from "@nestjs/common";
import { BotModule } from "./bot/bot.module";
import { SubscriptionPlanModule } from "./subscriptionPlan/subscriptionPlan.module";
import { PaymentModule } from "./payment/payment.module";
import { CustomerModule } from "./customer/customer.module";
import { MediaModule } from "./media/media.module";
import { UserModule } from "./user/user.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { PaymentIntentModule } from "./paymentIntent/paymentIntent.module";
import { ProductModule } from "./product/product.module";
import { ReportModule } from "./report/report.module";
import { NotificationModule } from "./notification/notification.module";
import { MessageModule } from "./message/message.module";
import { FlowStepModule } from "./flowStep/flowStep.module";
import { ConversationFlowModule } from "./conversationFlow/conversationFlow.module";
import { AnalyticsModule } from "./Analytics/analytics.module";
import { ConversationFlowModuleModule } from "./ConversationFlowModule/conversationflowmodule.module";
import { StripeModuleModule } from "./StripeModule/stripemodule.module";
import { SubscriptionManagementModule } from "./SubscriptionManagement/subscriptionmanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    BotModule,
    SubscriptionPlanModule,
    PaymentModule,
    CustomerModule,
    MediaModule,
    UserModule,
    InvoiceModule,
    SubscriptionModule,
    PaymentIntentModule,
    ProductModule,
    ReportModule,
    NotificationModule,
    MessageModule,
    FlowStepModule,
    ConversationFlowModule,
    AnalyticsModule,
    ConversationFlowModuleModule,
    StripeModuleModule,
    SubscriptionManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
