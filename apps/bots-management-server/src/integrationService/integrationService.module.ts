import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IntegrationServiceModuleBase } from "./base/integrationService.module.base";
import { IntegrationServiceService } from "./integrationService.service";
import { IntegrationServiceController } from "./integrationService.controller";
import { IntegrationServiceResolver } from "./integrationService.resolver";

@Module({
  imports: [IntegrationServiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [IntegrationServiceController],
  providers: [IntegrationServiceService, IntegrationServiceResolver],
  exports: [IntegrationServiceService],
})
export class IntegrationServiceModule {}
