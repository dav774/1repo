/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FlowStep as PrismaFlowStep,
  ConversationFlow as PrismaConversationFlow,
} from "@prisma/client";

export class FlowStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FlowStepCountArgs, "select">): Promise<number> {
    return this.prisma.flowStep.count(args);
  }

  async flowSteps(
    args: Prisma.FlowStepFindManyArgs
  ): Promise<PrismaFlowStep[]> {
    return this.prisma.flowStep.findMany(args);
  }
  async flowStep(
    args: Prisma.FlowStepFindUniqueArgs
  ): Promise<PrismaFlowStep | null> {
    return this.prisma.flowStep.findUnique(args);
  }
  async createFlowStep(
    args: Prisma.FlowStepCreateArgs
  ): Promise<PrismaFlowStep> {
    return this.prisma.flowStep.create(args);
  }
  async updateFlowStep(
    args: Prisma.FlowStepUpdateArgs
  ): Promise<PrismaFlowStep> {
    return this.prisma.flowStep.update(args);
  }
  async deleteFlowStep(
    args: Prisma.FlowStepDeleteArgs
  ): Promise<PrismaFlowStep> {
    return this.prisma.flowStep.delete(args);
  }

  async getConversationFlow(
    parentId: string
  ): Promise<PrismaConversationFlow | null> {
    return this.prisma.flowStep
      .findUnique({
        where: { id: parentId },
      })
      .conversationFlow();
  }
}
