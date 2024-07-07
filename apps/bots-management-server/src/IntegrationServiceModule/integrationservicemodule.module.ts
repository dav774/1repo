import { Module } from "@nestjs/common";
import { IntegrationServiceModuleService } from "./integrationservicemodule.service";
import { IntegrationServiceModuleController } from "./integrationservicemodule.controller";
import { IntegrationServiceModuleResolver } from "./integrationservicemodule.resolver";

@Module({
  controllers: [IntegrationServiceModuleController],
  providers: [IntegrationServiceModuleService, IntegrationServiceModuleResolver],
  exports: [IntegrationServiceModuleService],
})
export class IntegrationServiceModuleModule {}
