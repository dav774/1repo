import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FlowStepModuleBase } from "./base/flowStep.module.base";
import { FlowStepService } from "./flowStep.service";
import { FlowStepController } from "./flowStep.controller";
import { FlowStepResolver } from "./flowStep.resolver";

@Module({
  imports: [FlowStepModuleBase, forwardRef(() => AuthModule)],
  controllers: [FlowStepController],
  providers: [FlowStepService, FlowStepResolver],
  exports: [FlowStepService],
})
export class FlowStepModule {}
