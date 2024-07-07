import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlowStepServiceBase } from "./base/flowStep.service.base";

@Injectable()
export class FlowStepService extends FlowStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
