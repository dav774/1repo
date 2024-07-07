/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FlowStepService } from "../flowStep.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FlowStepCreateInput } from "./FlowStepCreateInput";
import { FlowStep } from "./FlowStep";
import { FlowStepFindManyArgs } from "./FlowStepFindManyArgs";
import { FlowStepWhereUniqueInput } from "./FlowStepWhereUniqueInput";
import { FlowStepUpdateInput } from "./FlowStepUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FlowStepControllerBase {
  constructor(
    protected readonly service: FlowStepService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FlowStep })
  @nestAccessControl.UseRoles({
    resource: "FlowStep",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFlowStep(
    @common.Body() data: FlowStepCreateInput
  ): Promise<FlowStep> {
    return await this.service.createFlowStep({
      data: {
        ...data,

        conversationFlow: data.conversationFlow
          ? {
              connect: data.conversationFlow,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        order: true,
        typeField: true,
        content: true,

        conversationFlow: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FlowStep] })
  @ApiNestedQuery(FlowStepFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FlowStep",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async flowSteps(@common.Req() request: Request): Promise<FlowStep[]> {
    const args = plainToClass(FlowStepFindManyArgs, request.query);
    return this.service.flowSteps({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        order: true,
        typeField: true,
        content: true,

        conversationFlow: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FlowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FlowStep",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async flowStep(
    @common.Param() params: FlowStepWhereUniqueInput
  ): Promise<FlowStep | null> {
    const result = await this.service.flowStep({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        order: true,
        typeField: true,
        content: true,

        conversationFlow: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FlowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FlowStep",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFlowStep(
    @common.Param() params: FlowStepWhereUniqueInput,
    @common.Body() data: FlowStepUpdateInput
  ): Promise<FlowStep | null> {
    try {
      return await this.service.updateFlowStep({
        where: params,
        data: {
          ...data,

          conversationFlow: data.conversationFlow
            ? {
                connect: data.conversationFlow,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          order: true,
          typeField: true,
          content: true,

          conversationFlow: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FlowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FlowStep",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFlowStep(
    @common.Param() params: FlowStepWhereUniqueInput
  ): Promise<FlowStep | null> {
    try {
      return await this.service.deleteFlowStep({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          order: true,
          typeField: true,
          content: true,

          conversationFlow: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
