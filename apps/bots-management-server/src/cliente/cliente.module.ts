import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClienteModuleBase } from "./base/cliente.module.base";
import { ClienteService } from "./cliente.service";
import { ClienteController } from "./cliente.controller";
import { ClienteResolver } from "./cliente.resolver";

@Module({
  imports: [ClienteModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteResolver],
  exports: [ClienteService],
})
export class ClienteModule {}
