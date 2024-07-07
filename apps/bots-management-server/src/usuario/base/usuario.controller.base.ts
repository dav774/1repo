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
import { UsuarioService } from "../usuario.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UsuarioCreateInput } from "./UsuarioCreateInput";
import { Usuario } from "./Usuario";
import { UsuarioFindManyArgs } from "./UsuarioFindManyArgs";
import { UsuarioWhereUniqueInput } from "./UsuarioWhereUniqueInput";
import { UsuarioUpdateInput } from "./UsuarioUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UsuarioControllerBase {
  constructor(
    protected readonly service: UsuarioService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Usuario })
  @nestAccessControl.UseRoles({
    resource: "Usuario",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUsuario(
    @common.Body() data: UsuarioCreateInput
  ): Promise<Usuario> {
    return await this.service.createUsuario({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        nombre: true,
        correoElectronico: true,
        contraseA: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Usuario] })
  @ApiNestedQuery(UsuarioFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Usuario",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async usuarios(@common.Req() request: Request): Promise<Usuario[]> {
    const args = plainToClass(UsuarioFindManyArgs, request.query);
    return this.service.usuarios({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        nombre: true,
        correoElectronico: true,
        contraseA: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Usuario })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Usuario",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async usuario(
    @common.Param() params: UsuarioWhereUniqueInput
  ): Promise<Usuario | null> {
    const result = await this.service.usuario({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        nombre: true,
        correoElectronico: true,
        contraseA: true,
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
  @swagger.ApiOkResponse({ type: Usuario })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Usuario",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUsuario(
    @common.Param() params: UsuarioWhereUniqueInput,
    @common.Body() data: UsuarioUpdateInput
  ): Promise<Usuario | null> {
    try {
      return await this.service.updateUsuario({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          nombre: true,
          correoElectronico: true,
          contraseA: true,
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
  @swagger.ApiOkResponse({ type: Usuario })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Usuario",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUsuario(
    @common.Param() params: UsuarioWhereUniqueInput
  ): Promise<Usuario | null> {
    try {
      return await this.service.deleteUsuario({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          nombre: true,
          correoElectronico: true,
          contraseA: true,
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
