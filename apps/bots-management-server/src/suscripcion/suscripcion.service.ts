import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuscripcionServiceBase } from "./base/suscripcion.service.base";

@Injectable()
export class SuscripcionService extends SuscripcionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
