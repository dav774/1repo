import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationServiceServiceBase } from "./base/integrationService.service.base";

@Injectable()
export class IntegrationServiceService extends IntegrationServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
