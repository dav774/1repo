import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventarioServiceBase } from "./base/inventario.service.base";

@Injectable()
export class InventarioService extends InventarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
