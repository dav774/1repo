import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InventarioModuleBase } from "./base/inventario.module.base";
import { InventarioService } from "./inventario.service";
import { InventarioController } from "./inventario.controller";
import { InventarioResolver } from "./inventario.resolver";

@Module({
  imports: [InventarioModuleBase, forwardRef(() => AuthModule)],
  controllers: [InventarioController],
  providers: [InventarioService, InventarioResolver],
  exports: [InventarioService],
})
export class InventarioModule {}
