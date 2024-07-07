import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SuscripcionModuleBase } from "./base/suscripcion.module.base";
import { SuscripcionService } from "./suscripcion.service";
import { SuscripcionController } from "./suscripcion.controller";
import { SuscripcionResolver } from "./suscripcion.resolver";

@Module({
  imports: [SuscripcionModuleBase, forwardRef(() => AuthModule)],
  controllers: [SuscripcionController],
  providers: [SuscripcionService, SuscripcionResolver],
  exports: [SuscripcionService],
})
export class SuscripcionModule {}
